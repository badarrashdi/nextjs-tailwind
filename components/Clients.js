import { useRouter } from "next/router";

const Clients = ({ blok }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="pt-24 brand-area">
      <div className="container">
        <div className="row">
          <div className="w-full">
            <div className="items-center justify-center row lg:justify-between">
              {blok.clients.map(function (item, i) {
                return (
                  <div
                    className="single-logo hover:opacity-100 wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    key={i}
                  >
                    <img src={item.image.filename} alt="brand" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Clients;
