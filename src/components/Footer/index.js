import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookSquare, FaInstagram, FaSpotify } from 'react-icons/fa';
import './style.css';

const Footer = () => {
  return ( 
    <div >
      <MDBFooter className="font-small pt-4 mt-4" id="footer">
        <MDBContainer fluid className="text-center text-md-left">
          {/* <MDBRow>
          <h2 className="titulo-footer">BUSCANOS POR AQUÍ</h2>
          </MDBRow>  */}
          <MDBRow>
            <MDBCol md="3" className="social-media">
              <a href="https://www.instagram.com/best.alquilertemporario/" target="_blank" rel="noopener noreferrer"><FaInstagram size='50px'/></a>
              <a href="https://www.facebook.com/best.alquilertemporario/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size='50px'/></a>
              <a href="https://open.spotify.com/user/1gercicw24c2840qu4oyilvpe?si=F9QZtlXwR_6anM-vX5AnxA" target="_blank" rel="noopener noreferrer"><FaSpotify size='50px'/></a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-payments text-center py-2">
          <MDBContainer fluid className="mx-0 my-3" id="payments" >
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fversion-vertical-large.png?alt=media&token=2d453173-c346-4ab0-8b76-e856afce6b68' width='60px' ></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fuala.png?alt=media&token=48c951c3-7329-4634-b8bf-ed05054e0a46' width='50px'></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fbru.png?alt=media&token=7189b40c-e896-4ef3-9e3d-5df49d4211f6' width='90px'></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fpf.png?alt=media&token=96f5e71b-149a-41f9-8bf0-fe29f5bc3699' width='80px'></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fr-p.png?alt=media&token=a6d6f245-1c5a-437a-8bb5-69c5da8a5bf2' width='90px'></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fvisa1.png?alt=media&token=333ace1c-ccf2-4a7a-9c8a-70920f2b6ef9' width='80px'></img>
            <img className="img-pay" alt="Payment" src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fmc.png?alt=media&token=ac004aae-197b-4ea0-bf5c-d2c7baeae548' width='80px'></img>
          </MDBContainer>
          <MDBContainer fluid className="copyright">
            &copy; {new Date().getFullYear()} Copyright - Best Alquiler Temporario
            <p className="desarrollo"> Built by <a href="https://github.com/carlosmiceli">Charly</a> and <a href="https://github.com/florenciaisagalindo/">Flor</a>.</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
 
export default Footer;