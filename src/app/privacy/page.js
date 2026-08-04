import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 40px', borderRadius: '2px' }}></div>
        <div style={{ color: '#444', lineHeight: '1.9', fontSize: '16px' }}>
          <p>At King Flower Shop, your privacy is our priority. This policy outlines how we handle your personal information.</p>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Information We Collect</h2>
          <p>When you contact us or place an order, we may collect your name, phone number, WhatsApp number, and delivery address solely for the purpose of processing your order and communicating with you about your decoration requirements.</p>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>How We Use Your Information</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>To process and confirm your orders.</li>
            <li style={{ marginBottom: '10px' }}>To communicate with you regarding your decoration requirements.</li>
            <li style={{ marginBottom: '10px' }}>To provide delivery or on-site decoration service updates.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Privacy Guarantee</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Your contact details and personal information are never shared with third parties.</li>
            <li style={{ marginBottom: '10px' }}>We do not sell or rent your information to anyone.</li>
            <li style={{ marginBottom: '10px' }}>Your information is kept strictly private and confidential.</li>
            <li style={{ marginBottom: '10px' }}>We respect your privacy and are committed to protecting it at all times.</li>
          </ul>

          <div style={{ marginTop: '40px', padding: '25px', backgroundColor: '#fff3f3', border: '2px solid #e8b0b0', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#c0303a' }}>⚠️ No Return & No Refund Policy</h2>
            <p style={{ margin: 0 }}>
              Due to the highly customized and perishable nature of our decoration services and products, <strong>all orders are final and cannot be returned or refunded once confirmed.</strong> We encourage customers to review all details carefully before placing an order. For any concerns, please contact us before confirming your booking.
            </p>
          </div>

          <p style={{ marginTop: '30px', color: '#777', fontSize: '14px' }}>
            If you have any questions regarding our privacy practices, please contact us on WhatsApp at 03432877581.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
