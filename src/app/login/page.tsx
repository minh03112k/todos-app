import LoginForm from '@/components/Login/LoginForm';
import Footer from '@/components/Login/Footer';

export default function Login() {
  return (
    <div className='login_main relative'>
      <div className='login_cols flex self-center justify-center flex-1'>
        <div className='login_left flex-1 flex items-end box-border max-w-md pr-16'>
          <div className='login-left-extra'>
            <h3 className='heading--bely heading--regular text-white text-4xl leading-10 font-normal'>
              Be productive with
              <br />
              your money, your way.
            </h3>
            <div className='login-message w-full box-border text-base p-4 mt-8 bg-white rounded-lg opacity-80'>
              Roll-up and nesting on Income &amp; Expense report now available.
              &nbsp;
              <a
                className='text-violet-400 underline'
                href='#'
                target='_blank'
                rel='noopener'
              >
                Read more
              </a>
              .
            </div>
          </div>
        </div>
        <div className='login_right flex-1 max-w-sm'>
          <div className='w-full max-w-md my-0 mx-auto box-border bg-white rounded-lg shadow-2xl text-xl px-10 py-12'>
            <div className='login_box-body'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
