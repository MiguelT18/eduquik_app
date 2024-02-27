"use client";

import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";

export default function DashboardPage() {
	return (
		<>
			<h1 className="text-3xl uppercase font-bold">Dashboard</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
				dignissimos eligendi nam eos dolor ad numquam alias quas cum saepe?
				Deleniti consequatur ipsam, impedit quia harum corporis labore
				cupiditate aliquam?
			</p>
			<Button onClick={() => signOut()} color="danger" className="text-white">
				Cerrar sesión
			</Button>
		</>
	);
}
