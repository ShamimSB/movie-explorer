const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 text-center border-t border-gray-800 p-8">
      <p className="text-white font-semibold mb-4">MovieExplorer</p>
      <p className="text-sm mb-3">
        © 2026 MovieExplorer. All rights reserved.
      </p>
      <div className="text-sm">
        <span>Developed by </span>
        <a href="https://github.com/ShamimSB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition underline">@ShamimSB</a>
      </div>
    </div>
  )
}

export default Footer;