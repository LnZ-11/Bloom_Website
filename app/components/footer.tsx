import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <div className="absolute flex flex-col md:flex-row gap-6 bg-[#0b8a43] w-full h-auto justify-evenly p-12">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Liens utiles</h3>
                    <ul>
                        <li><Link href="/history">Histoire</Link></li>
                        <li><Link href="/certification">Certification BIO</Link></li>
                        <li><Link href="/collaboration">Collaborations</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Contact</h3>
                    <ul>
                        <li>contact@bloom.com</li>
                        <li>+33 1 84 17 18 19</li>
                        <li>12, rue de l'industrie, 75011 Paris</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}