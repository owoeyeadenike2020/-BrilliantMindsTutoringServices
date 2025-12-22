import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src= {`${getImagePrefix()}images/logo/uncle_s_logo-removebg-preview2.png`}
        alt="logo"
        width={160}
        height={90}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
