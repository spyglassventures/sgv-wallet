import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

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

        <div className="grid">





        </div>
      </div>
    </main>
  );
}
