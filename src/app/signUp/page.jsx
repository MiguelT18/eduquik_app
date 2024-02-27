"use client";

import { signIn, useSession } from "next-auth/react";
import { Button, ButtonGroup, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import "iconify-icon";

export default function SignUp() {
	const { data: session } = useSession();
	return (
		<main className="flex items-center justify-center w-full h-full min-h-screen px-4">
			<div className="w-full max-w-[600px] bg-blue-900/10 rounded-3xl p-8">
				<h1 className="text-2xl text-center uppercase font-bold">
					Registrarse
				</h1>
				<form className="w-full flex flex-col gap-4 mt-5">
					<div className="flex gap-3">
						<Input size="sm" type="text" label="Nombres" />
						<Input size="sm" type="text" label="Apellidos" />
					</div>
					<Input size="sm" type="email" label="Correo electrónico" />
					<Input size="sm" type="password" label="Contraseña" />
					<Input size="sm" type="password" label="Repite tu contraseña" />
					<Button className="mt-1 w-full" color="primary" size="md">
						Regístrate
					</Button>
					<span>
						Ya tienes una cuenta?{" "}
						<Link
							href="/signIn"
							className="text-center text-blue-500 hover:underline"
						>
							Regístrate
						</Link>
					</span>
				</form>
				<hr className="my-5" />
				<div>
					<span className="text-center">También puedes registrarte con:</span>
					<div className="flex justify-center gap-4 mt-2">
						<ButtonGroup className="gap-0.5 [&>Button]:bg-white">
							<Button onClick={() => signIn("google")}>
								<iconify-icon icon="devicon:google" width="25" height="25" />
							</Button>
							<Button>
								<iconify-icon
									icon="icon-park-outline:github"
									style={{ color: "#151515" }}
									width="30"
									height="30"
								/>
							</Button>
							<Button>
								<iconify-icon icon="logos:facebook" width="30" height="30" />
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		</main>
	);
}
