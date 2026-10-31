export default async (request) => {
 const reply=(status,error)=>Response.json(error?{error}:{ok:true},{status});
 if(request.method!=='POST')return reply(405,'Method not allowed');
 const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin)return reply(403,'Request not allowed');
 const destination=process.env.GHL_FEEDBACK_WEBHOOK_URL;
 if(!destination)return reply(503,'Feedback is temporarily unavailable. Please try again later.');
 let data;
 try{const text=await request.text();if(text.length>20000)return reply(413,'Message too long');data=JSON.parse(text);}catch{return reply(400,'Invalid feedback');}
 if(typeof data.website==='string'&&data.website)return reply(200);
 const rating=Number(data.rating);
 const message=typeof data.feedback==='string'?data.feedback.trim():'';
 const name=typeof data.name==='string'?data.name.trim():'';
 const email=typeof data.email==='string'?data.email.trim():'';
 if(!Number.isInteger(rating)||rating<1||rating>3||!message||message.length>4000||name.length>100||email.length>254||(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)))return reply(400,'Please check your rating and feedback.');
 try{
 const response=await fetch(destination,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({rating,feedback:message,name,email,location:'Field of Screams Nixa',source:'Nixa Guest Feedback',submitted_at:new Date().toISOString()}),signal:AbortSignal.timeout(10000)});
 if(!response.ok)return reply(502,'We could not submit your feedback. Please try again.');
 return reply(200);
 }catch{return reply(502,'We could not submit your feedback. Please try again.');}
};
export const config = { path: "/api/feedback" };
