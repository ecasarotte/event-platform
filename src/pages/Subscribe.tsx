import { Logo } from "../components/Logo";

export function Subscribe() {
	return (
		<div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
			<div className="w-full max-w-[1100px] mt-20 mx-auto flex items-center justify-between">
				<div className="max-w-[650px]">
					<Logo />

					<h1 className="mt-8 text-[2.5rem] leading-tight">
						Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
					</h1>
					<p className="mt-6 text-gray-200 leading-relaxed">
						Em apenas uma semana você vai dominar na prática uma das tecnologias
						mais utilizadas e com alta demanda para acessar as melhores
						oportunidades do mercado.
					</p>
				</div>

				<div className="p-8 bg-gray-700 border border-gray-500 rounded">
					<strong className="mb-6 text-2xl block">
						Inscreva-se gratuitamente
					</strong>

					<form action="" className="flex flex-col gap-2 w-full">
						<input
							type="text"
							placeholder="Seu nome completo"
							className="bg-gray-900 rounded px-5 h-14" />
						<input
							type="text"
							placeholder="Digite seu email"
							className="bg-gray-900 rounded px-5 h-14" />

						<button
							type="submit"
							className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors">
								Garantir Minha vaga
						</button>
					</form>
				</div>
			</div>

			<div className="mt-40">
				<img src="/src/assets/code-mock.png" alt="" />
			</div>
		</div>
	);
}