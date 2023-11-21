"use client";

import api from "@/services/axios";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular";

const CertificateDetailPage = () => {
  const param = useParams();
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [pdf, setPdf] = useState<string>("");
  const router = useRouter();

  const getCertificate = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(
        `/api/v10/get-certificate/${param.address}`
      );
      setPdf(data.data.certificate_pdf_url);
      setIsLoading(false);
    } catch (error: any) {
      if (error?.response?.data?.data.length <= 0) router.push("/not-found");
      setIsLoading(false);
    }
  }, [param.address]);

  useEffect(() => {
    getCertificate();
  }, [getCertificate]);

  return (
    <div className="mt-[82.27px]">
      <div className="h-screen">
        {isloading ? (
          <div className="flex justify-center mt-[200px]">
            <SpinnerIos className="animate-spin text-blue-100" size={100} />
          </div>
        ) : (
          <>
            <div className="block sm:hidden px-4">
              Your web browser may not have a PDF plugin. Instead you can{" "}
              <a className="text-blue-100 underline" href={pdf} target="_blank">
                click here to download the PDF file.
              </a>
            </div>
            <div className="h-full mx-auto container hidden sm:block">
              <object
                data={pdf}
                type="application/pdf"
                width="100%"
                height="100%"
              ></object>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CertificateDetailPage;
