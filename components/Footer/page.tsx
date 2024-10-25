import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between p-6 bg-slate-100 text-grey-500">
      <div className="flex-1">
        <h3 className="font-bold mb-2">Core Courses</h3>
        <ul>
          <li><Link href="">Programming Fundamentals</Link></li>
          <li><Link href="">Web2 Using NextJS</Link></li>
          <li><Link href="">Earn as You Learn</Link></li>

        </ul>
      </div>
      <div className="flex-1">
        <h3 className="font-bold mb-2">Advanced Courses</h3>
        <ul>
          <li ><Link  href="">Web 3 and Metaverse</Link></li>
          <li><Link href="">Cloud-Native Computing</Link></li>
          <li><Link href="">Artificial Intelligence (AI) and Deep Learning</Link></li>
          <li><Link href="">Ambient Computing and IoT</Link></li>
          <li><Link href="">Genomics and Bioinformatics</Link></li>
          <li><Link href="">Network Programmability and Automation</Link></li>

        </ul>
      </div>
      <div className="flex-1">
        <h3 className="font-bold mb-2">Social Links</h3>
        <p>Email: <Link href="mailto:education@governorsindh.com" className="hover:underline">education@governorsindh.com</Link></p>
        <p>Phone: <span>+1234567890</span></p>
      </div>
    </footer>
  );
};

export default Footer;