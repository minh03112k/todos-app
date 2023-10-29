import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";

export default function Login() {
  return (
    <div className="login_main">
      <div className="login_cols flex self-center justify-center flex-1">
        <div className="login_left flex-1 flex items-end box-border max-w-md pr-16">
          <div className="login-left-extra">
            <h3 className="heading--bely heading--regular text-white text-4xl leading-10 font-normal">
              Be productive with
              <br />
              your money, your way.
            </h3>
            <div className="login-message w-full box-border text-base p-4 mt-8 bg-white rounded-lg opacity-80">
              Roll-up and nesting on Income &amp; Expense report now available.
              &nbsp;
              <a
                className="text-violet-400 underline"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Read more
              </a>
              .
            </div>
          </div>
        </div>
        <div className="login_right flex-1 max-w-sm">
          <div className="w-full max-w-md my-0 mx-auto box-border bg-white rounded-lg shadow-2xl text-xl px-10 py-12">
            <div className="login_box-body">
              <form className="">
                <div className="text-center mb-8 text-base leading-6">
                  <h1 className="text-3xl font-medium text-[#622A75] mb-4">
                    Sign in to Finance
                  </h1>
                  Don&apos;t have an account?{" "}
                  <a className="text-[#3F3FDF] underline"> Sign up now</a>
                </div>
                <div className="flex w-full flex-col flex-wrap md:flex-nowrap gap-8">
                  <Input
                    startContent={<AiOutlineUser />}
                    isRequired
                    variant="underlined"
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    startContent={<RiLockPasswordLine />}
                    isRequired
                    variant="underlined"
                    type="password"
                    placeholder="Password"
                  />
                  <Checkbox size="sm">Remember me for 2 weeks</Checkbox>
                  <Button color="secondary">Sign in</Button>
                  <Link
                    href="#"
                    underline="always"
                    className="self-center text-[#3F3FDF]"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}