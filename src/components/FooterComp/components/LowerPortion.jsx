import logo from "../../../assets/logo.svg";

const links = [
  { title: "IQTEST", subLinks: ["Quiz", "Results", "Pricing"] },
  { title: "Support", subLinks: ["Help", "FAQ", "Contact"] },
  {
    title: "Legal",
    subLinks: ["Privacy Policy", "Terms of Service", "Cookies Policy"],
  },
];

export default function LowerPortion() {
  return (
    <div className="flex justify-between flex-col xl:flex-row gap-8">
      <div className="w-full xl:w-1/4 flex flex-col gap-3">
        <div className="flex gap-2">
          <img src={logo} alt="Logo Image" />
          <h4 className="text-3xl">IQTEST.ai</h4>
        </div>
        <p className="text-xl opacity-70">
          Test your IQ in a very easy and simple step not complex.
        </p>
      </div>
      <div className="w-full xl:w-1/2 flex justify-between flex-wrap gap-y-4">
        {links?.map((link) => (
          <div className="w-1/2 sm:w-1/3">
            <h5 className="text-lg">{link?.title}</h5>
            {link?.subLinks?.map((subLink) => (
              <p className="opacity-70">{subLink}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
