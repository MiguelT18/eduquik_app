"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, ButtonGroup, Input } from "@nextui-org/react";
import Link from "next/link";
import "iconify-icon";

export default function SignIn() {
	const { data: session } = useSession();

	return (
		<main className="flex items-center justify-center h-full min-h-screen px-4">
			<div className="h-full w-full max-w-[600px] bg-blue-900/10 rounded-3xl p-8">
				<h1 className="text-2xl text-center uppercase font-bold">
					Iniciar Sesión
				</h1>
				<form className="w-full flex flex-col gap-4 mt-5">
					<Input size="sm" id="email" type="email" label="Correo electrónico" />
					<Input size="sm" type="password" label="Contraseña" />
					<span className="cursor-pointer -mt-2 block text-blue-500 hover:underline">
						Olvidaste tu contraseña?
					</span>
					<Button className="mt-1 w-full" color="primary" size="md">
						Iniciar sesión
					</Button>
					<span>
						No tienes una cuenta?{" "}
						<Link
							href="/signUp"
							className="text-center text-blue-500 hover:underline"
						>
							Regístrarte
						</Link>
					</span>
				</form>
				<hr className="my-5" />
				<div>
					<span className="text-center">
						También puedes iniciar sesión con:
					</span>
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
