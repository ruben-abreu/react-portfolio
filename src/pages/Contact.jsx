import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div>
      <div className='max-w-[100%] mt-20'>
        <div className='text-white text-2xl font-bold mb-4'>
          Contact <span className='text-[#0174be]'>Me</span>
        </div>
        <div className='mt-10 flex justify-center h-[20vh] flex-col gap-6 rounded-md shadow-md custom-box-shadow p-5'>
          <h3>You can find me at:</h3>
          <p>
            <a href='mailto:ruben_abreu@icloud.com'>
              <EmailIcon /> &nbsp; ruben_abreu@icloud.com
            </a>
          </p>
          <p>
            <LocationOnIcon />
            <a href='https://maps.app.goo.gl/p21MQCrtdEj5Ws8s6'>
              &nbsp;&nbsp; Lisbon, Portugal
            </a>
          </p>
        </div>
      </div>
      <footer className='text-center mt-4'>
        © {new Date().getFullYear()}. Made with ❤️ by Ruben Abreu.
      </footer>
    </div>
  );
}

export default Contact;
