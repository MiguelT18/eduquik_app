import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl uppercase font-bold mb-3 pt-6 text-center">
				Bienvenido Usuario!
			</h1>
			<p className="max-w-[520px] mx-auto text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
				explicabo rem repellendus exercitationem doloribus officiis nemo esse,
				corporis ipsa totam unde, vel optio deleniti similique, expedita et.
				Molestias, ea quo!
			</p>
			<div className="w-full max-w-[500px] mx-auto mt-5 flex items-center justify-evenly">
				<Link href="/dashboard">
					<Button size="md" color="primary">
						Go to Dashboard
					</Button>
				</Link>
				<Link href="/signIn">
					<Button size="md" color="primary">
						Sign In
					</Button>
				</Link>
				<Link href="/signUp">
					<Button size="md" color="primary">
						Sign Up
					</Button>
				</Link>
			</div>
		</>
	);
}
