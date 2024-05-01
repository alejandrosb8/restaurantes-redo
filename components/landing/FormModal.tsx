"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDialog } from "@/stores/dialogStore";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";

/**
 TODO:

  - Country dropdown
 */

const schema = z
	.object({
		restaurant: z.string().min(3),
		subdomain: z.string().min(3),
		name: z.string().min(3),
		email: z.string().email(),
		username: z.string().min(3),
		country: z.string().min(3),
		password: z.string().min(6),
		passwordConfirmation: z.string().min(6),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "Passwords do not match",
		path: ["passwordConfirmation"],
	});

export function FormModal({ restaurantName }: { restaurantName: string }) {
	const { isOpen, onClose } = useDialog();
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			restaurant: restaurantName || "",
			name: "",
			password: "",
			passwordConfirmation: "",
		},
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		form.reset({
			email: "",
			restaurant: restaurantName,
			name: "",
			password: "",
			passwordConfirmation: "",
		});
	}, [restaurantName]);

	function onSubmit(values: z.infer<typeof schema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-h-[calc(100vh-2rem)] overflow-auto">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="restaurant"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Nombre del restaurante</FormLabel>
									<FormControl>
										<Input
											placeholder="Introduce el nombre de tu restaurante"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="subdomain"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Subdominio</FormLabel>
									<FormControl>
										<Input placeholder="Introduce el subdominio" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Nombre</FormLabel>
									<FormControl>
										<Input placeholder="Introduce tu nombre" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Introduce tu email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Usuario</FormLabel>
									<FormControl>
										<Input placeholder="Introduce tu usuario" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>País</FormLabel>
									<FormControl>
										<Input placeholder="Introduce tu país" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Contraseña</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Introduce tu contraseña"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="passwordConfirmation"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Confirmar contraseña</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="Confirma tu contraseña"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Empezar a vender online</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
