const Footer = () => {
    return ( 
        <footer>
        <div className="logo">
          <img src="assets/Logo.png" alt="" />
        </div>
        <div className="links">
          <ul>
            <li><span>Overview</span></li>
            <li><span>Symptoms</span></li>
            <li><span>Prevention</span></li>
            <li><span>Treatment</span></li>
          </ul>
        </div>
        <div className="social-links">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </footer>
       
     );
}
 
export default Footer;