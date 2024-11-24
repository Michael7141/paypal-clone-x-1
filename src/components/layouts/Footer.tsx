const Footer = () => {
  return (
    <footer className='bg-white mt-12 border-t'>
      <div className='max-w-7xl mx-auto p-6'>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-6 text-sm'>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Help
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Contact Us
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Security
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Fees
            </a>
          </div>
          <div className='flex items-center space-x-4 text-sm text-gray-500'>
            <span>©1999-2024 PayPal, Inc. All rights reserved.</span>
            <a href='#' className='hover:text-gray-900'>
              Privacy
            </a>
            <a href='#' className='hover:text-gray-900'>
              Cookies
            </a>
            <a href='#' className='hover:text-gray-900'>
              Legal
            </a>
            <a href='#' className='hover:text-gray-900'>
              Policy Updates
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
