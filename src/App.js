import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css"; // css from thidweb
import "./styles/output.css"; // Tailwind CSS output file, copied from outputfolder into src/styles


export default function Home() {
  return (
    <main className="main">

      <div className="above-header">
        <div className="connect" style={{ float: "right", paddingRight: "40px" }}>
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </div>
        {/* Additional content for the above-header div */}
      </div>

      <div className="container">

        <div className="header">

          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                Dynamo DeFi.
              </a>
            </span>
          </h1>

          <p className="description">
            Get started by configuring your desired network in{" "}
            <code className="code">connect wallet</code>, <p> </p>then modify the{" "}
            <code className="code">diversify your asset returns</code> file!
          </p>
        </div>



        {/* ####    BODY   #####   */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-xl font-bold mb-4">DeFi Opportunities</h2>
          </div>
          <div className="col-span-1 p-4 bg-white flex items-center">
            <div>
              <span className="gradient-text-0">DeFi Project 1:</span>
              <p className="text-gray-700">Text for DeFi Project 1</p>
            </div>
          </div>
          <div className="col-span-1 p-4 bg-white flex items-center">
            <div>
              <span className="gradient-text-1">DeFi Project 2:</span>
              <p className="text-gray-700">Text for DeFi Project 2</p>
            </div>
          </div>
          <div className="col-span-1 p-4 bg-white col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white">
                <span className="gradient-text-2">DeFi Project 3:</span>
                <p className="text-gray-700">Text for DeFi Project 3</p>
              </div>
              <div className="p-4 bg-white">
                <span className="gradient-text-2">DeFi Project 4:</span>
                <p className="text-gray-700">Text for DeFi Project 4</p>
              </div>
            </div>
          </div>
        </div>
        {/* ####    END BODY   #####   */}




      </div>
    </main>
  );
}
