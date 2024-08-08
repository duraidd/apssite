import React from "react";
import Appheader from "./Appheader";

export default function Contact() {
  return (
    <div>
      <Appheader />
      <div style={{  backgroundColor: '#f9f9f9', borderRadius: '0.5rem', boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.2)', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'font-title', fontSize: '1.875rem', color: '#333' }}>Customized IT Services to Elevate your Business</h1>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Phi Dimensions is your one stop shop for technologically diverse solutions driven by top-notch platforms like MuleSoft, Salesforce, API (Application Programming Interface).
          </p>
        </div>
        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#fff', borderRadius: '0.25rem', padding: '2rem', border: '1px solid #ddd' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <img src="" width="60" height="60" style={{objectFit:"cover", borderRadius: '50%'}} alt="API Logo" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>API Development</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              We provide comprehensive API development services to help businesses build scalable and secure APIs. Our expert team offers end-to-end solutions for API development, from design and development to testing and deployment.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent:'center' }}>
              <button style={{padding: '0.5rem', borderRadius: '50%', backgroundColor: 'rgba(255, 94, 39, 0.1)', color: '#fff',border:'none'}}>
                <span class="material-symbols-outlined">a</span>
              </button>
            </div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#fff', borderRadius: '0.25rem', padding: '2rem', border: '1px solid #ddd' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <img src="" width="60" height="60" style={{ objectFit:"cover", borderRadius: '50%' }} alt="Salesforce Logo" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>Salesforce Services</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              We provide comprehensive API development services to help businesses build scalable and secure APIs. Our expert team offers end-to-end solutions for API development, from design and development to testing and deployment.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyItems: 'center' }}>
              <button style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'rgba(255, 94, 39, 0.1)', color: '#fff',border:'none' }}>
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div style={{ textAlign: 'center', backgroundColor: '#fff', borderRadius: '0.25rem', padding: '2rem', border: '1px solid #ddd' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <img src="" width="60" height="60" style={{ objectFit:"cover", borderRadius: '50%' }} alt="Salesforce Logo" />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#333' }}>Salesforce Services</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              We provide comprehensive API development services to help businesses build scalable and secure APIs. Our expert team offers end-to-end solutions for API development, from design and development to testing and deployment.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyItems: 'center' }}>
              <button style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'rgba(255, 94, 39, 0.1)', color: '#fff',border:'none' }}>
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
