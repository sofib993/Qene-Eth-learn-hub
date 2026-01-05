const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-900">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold">Qene</h2>
            <p className="text-slate-500 text-base">
              Empowering the next generation of African talent through accessible and quality education.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Marketing</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Analytics</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Pricing</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Documentation</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">About</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Blog</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Privacy</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-teal-500">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-500 xl:text-center">&copy; 2024 Qene, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
