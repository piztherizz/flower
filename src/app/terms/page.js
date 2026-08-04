import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
        <h1 className="section-title">Terms & Conditions</h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#c0606a', margin: '0 auto 40px', borderRadius: '2px' }}></div>
        <div style={{ color: '#444', lineHeight: '1.9', fontSize: '16px' }}>
          <p>By placing an order or using the services of King Flower Shop, you agree to the following terms and conditions. Please read them carefully before confirming your booking.</p>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Order & Booking</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>All orders are confirmed only after direct discussion and a booking agreement with our team via WhatsApp or phone.</li>
            <li style={{ marginBottom: '10px' }}>A booking deposit may be required for full event setups to secure your date.</li>
            <li style={{ marginBottom: '10px' }}>Full event setups require advance booking. Last-minute requests are subject to availability.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Cancellation Policy</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Customized orders and event setups cannot be cancelled after confirmation.</li>
            <li style={{ marginBottom: '10px' }}>Any cancellation request must be made before the decoration work begins.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Event Details & Timing</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Customers must provide accurate and complete event details at the time of booking.</li>
            <li style={{ marginBottom: '10px' }}>Decoration timing and setup schedule must be agreed upon in advance.</li>
            <li style={{ marginBottom: '10px' }}>King Flower Shop is not responsible for delays caused by incorrect information provided by the customer.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>Pricing</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>Prices are quoted based on your specific requirements and may vary depending on customization, materials, and venue size.</li>
            <li style={{ marginBottom: '10px' }}>Final pricing will be communicated before order confirmation.</li>
            <li style={{ marginBottom: '10px' }}>Prices are subject to change without notice for new bookings.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: '700', marginTop: '35px', marginBottom: '15px', color: '#2d2d2d' }}>General</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>King Flower Shop reserves the right to refuse services for any inappropriate, offensive, or unreasonable requests.</li>
            <li style={{ marginBottom: '10px' }}>We strive for the highest quality in every decoration. If you have any concerns, please communicate with us before and during the decoration process.</li>
          </ul>

          <p style={{ marginTop: '30px', color: '#777', fontSize: '14px' }}>
            These terms may be updated from time to time. For any questions, please contact us on WhatsApp at 03432877581.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
