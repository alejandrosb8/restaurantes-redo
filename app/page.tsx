"use client";

import { Header } from "@/components/landing/Header";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormModal } from "@/components/landing/FormModal";
import { useState } from "react";
import { useDialog } from "@/stores/dialogStore";

/*
TODO:

- Choose a better image
- Add menu image to the right side of the image
- Add more sections to the home page
- Maybe change the font
*/

export default function Home() {
	const { onOpen } = useDialog();
	const [restaurantName, setRestaurantName] = useState("");

	function handleCreateRestaurant(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onOpen();
	}

	return (
		<>
			<Header />
			<main className="flex flex-col items-center justify-between container p-0 mb-0">
				<div className="relative w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[600px]">
					<Image
						src="/main_image.webp"
						alt="Image"
						width="1920"
						height="1080"
						className="h-full w-full object-cover absolute inset-0 filter brightness-[0.4] -z-10"
					/>
					<div className="flex flex-col items-center justify-center max-w-[500px] gap-4 p-4 md:ml-6">
						<div className="w-full">
							<h1 className="text-3xl lg:text-5xl font-bold text-balance text-white">
								Comienza a vender a distancia
							</h1>
							<p className="text-pretty text-gray-200">
								Somos una plataforma que permite a los restaurantes vender a
								distancia mediante la creación de un menú digital y el manejo de
								comandas.
							</p>
						</div>
						<p className="text-pretty text-gray-200">
							Puedes registrar tu restaurante en nuestra plataforma y comenzar a
							vender a distancia. ¡Es muy fácil!
						</p>
						<form className="flex w-full" onSubmit={handleCreateRestaurant}>
							<Input
								type="text"
								placeholder="Nombre de tu restaurante"
								className="grow w-full rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
								value={restaurantName}
								onChange={(e) => setRestaurantName(e.target.value)}
							/>
							<Button type="submit" className="shrink rounded-l-none">
								Crear
							</Button>
						</form>
					</div>
				</div>
			</main>
			<footer className="container p-4">
				<div className="flex items-center justify-center">
					<div className="flex items-center justify-center gap-4">
						<p className="text-sm text-gray-600">© 2024 Restaurantes</p>
						<p className="text-sm text-gray-600">
							Todos los derechos reservados
						</p>
					</div>
				</div>
			</footer>
			<FormModal restaurantName={restaurantName} />
		</>
	);
}
