import React,{ Component } from 'react';

import footer from './footer.css'

class Footer extends Component{
    render(){
        return(
            <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Heading</h2>
      <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
      <p><a href="www.gooogle.com"><i class="fa fa-facebook-square mr-1"></i></a><a href="www.gooogle.com"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0">
          <li>- <a href="www.gooogle.com">Lorem ipsum</a></li>
          <li>- <a href="www.gooogle.com">Nam mauris velit</a></li>
          <li>- <a href="www.gooogle.com">Etiam vitae mauris</a></li>
          <li>- <a href="www.gooogle.com">Fusce scelerisque</a></li>
          <li>- <a href="www.gooogle.com">Sed faucibus</a></li>
          <li>- <a href="www.gooogle.com">Mauris efficitur nulla</a></li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
        );
    }
}
export default Footer;