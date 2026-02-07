import{j as e}from"./jsx-runtime.7cipUGXE.js";import{r as c}from"./index.lVUL4htz.js";import{t as s}from"./_astro-entry_sonner.CPTfWIH8.js";function b(){const[a,l]=c.useState({name:"",email:"",subject:"",message:""}),[m,d]=c.useState(!1),t=o=>{const{name:n,value:r}=o.target;l(i=>({...i,[n]:r}))},u=async o=>{o.preventDefault(),d(!0);const n=s.loading("Sending your message...");try{const r=new FormData(o.currentTarget),i=await fetch("/api/contact",{method:"POST",body:r}),f=await i.json();if(!i.ok)throw new Error(f.error||"Failed to send message");s.dismiss(n),s.success("Message sent successfully! We will get back to you soon.",{duration:5e3}),l({name:"",email:"",subject:"",message:""})}catch(r){console.error("Form submission error:",r),s.dismiss(n),s.error(r instanceof Error?r.message:"Failed to send message",{duration:5e3})}finally{d(!1)}};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:u,className:"contact-form",children:[e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"name",children:"Full Name"}),e.jsx("input",{id:"name",type:"text",name:"name",value:a.name,onChange:t,required:!0,placeholder:"Enter your full name",className:"form-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"email",children:"Email Address"}),e.jsx("input",{id:"email",type:"email",name:"email",value:a.email,onChange:t,required:!0,placeholder:"Enter your email address",className:"form-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"subject",children:"Subject"}),e.jsx("input",{id:"subject",type:"text",name:"subject",value:a.subject,onChange:t,required:!0,placeholder:"Enter message subject",className:"form-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:t,required:!0,placeholder:"Enter your message",className:"form-input",rows:4})]}),e.jsxs("button",{type:"submit",className:"send-button",disabled:m,children:[m?"Sending...":"Send Message",e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("title",{children:"Send message icon"}),e.jsx("path",{d:"M2 21L23 12L2 3V10L17 12L2 14V21Z",fill:"currentColor"})]})]})]}),e.jsx("style",{children:`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: var(--primary-90);
          font-size: 1.6rem;
        }

        .form-input {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(123, 74, 226, 0.2);
          border-radius: 8px;
          color: var(--primary-100);
          font-size: 1.6rem;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.1);
        }

        .send-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1.6rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .send-button:hover {
          transform: translateY(-2px);
        }

        .send-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .form-message {
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.4rem;
          margin-top: 1rem;
        }

        .form-message.success {
          color: #10b981;
        }

        .form-message.error {
          color: #ef4444;
        }
      `})]})}export{b as ContactForm};
