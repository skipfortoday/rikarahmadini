import AppsGif from "../../assets/ticket2.gif";
import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="w-full flex justify-center mb-12 p-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 card w-full md:w-3/4 shadow-xl bg-primary p-3 ">
        <div className="flex-1">
          <div className="card w-full bg-base-100 shadow-xl my-3">
            <div className="card-body grid grid-cols-2">
              <Image
                src={AppsGif}
                alt="my gif"
                layout="fixed"
                width={150}
                height={150}
              />
              <h2 className="card-title ">
                If a dog chews shoes whose shoes does he choose?
              </h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl my-3">
            <div className="card-body grid grid-cols-2">
              <h2 className="card-title ">
                If a dog chews shoes whose shoes does he choose?
              </h2>
              <Image
                src={AppsGif}
                alt="my gif"
                layout="fixed"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 pb-3">
          <div className="card w-full h-full bg-base-100 shadow-xl my-2">
            <div className="card-body">
              <h2 className="card-title ">
                If a dog chews shoes whose shoes does he choose?
              </h2>
              <div className="flex justify-center">
                <Image
                  src={AppsGif}
                  alt="my gif"
                  layout="fixed"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
