import { toast } from "react-toastify";

export const withToast = (txPromise) => {
  toast.promise(txPromise, {
    pending: {
      render() {
        return `Processing transaction...`;
      },
    },
    success: {
      render({ data }) {
        return (
          <div>
            <p className="font-bold">
              Tx: {data.transactionHash.slice(0, 19)}...
            </p>
            <p>Has been processed</p>
            <a
              href={`https://ropsten.etherscan.io/tx/${data.transactionHash}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600"
            >
              Tx details
            </a>
          </div>
        );
      },
      icon: "🟢",
    },
    error: {
      render({ data }) {
        return <div>{data.message ?? "Transaction has failed"}</div>;
      },
    },
  });
};
