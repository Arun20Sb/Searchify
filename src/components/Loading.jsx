import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <TailSpin color="#32CD32" height={80} width={80} /> 
    </div>
  );
}

export default Loading;
