import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, LightningSlash } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import '@vime/core/themes/default.css';

const GET_LESSON_BY_SLUG_QUERY = gql`
query GetLessonBySlug($slug: String) {
	lesson(where: {slug: $slug}) {
		description
		title
		videoId
		teacher {
			bio
			avatarURL
			name
		}
	}
}
`
interface GetLessonBtSlugResponse {
	lesson: {
		description: string;
		title: string;
		videoId: string;
		teacher: {
			bio: string;
			avatarURL: string;
			name: string;
		}
	}
}

interface VideoProps {
	lessonSlug: string;
}

export function Video(props: VideoProps) {

	const { data } = useQuery<GetLessonBtSlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
		variables: {
			slug: props.lessonSlug
		}
	});

	if (!data) {
		return (
			<div className="flex flex-1 items-center justify-center">
				<p className="text-lg">Carregando...</p>
			</div>
		);
	}

	return (
		<div className="flex-1">
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data?.lesson.videoId!} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-[60px]">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">
							{data?.lesson.title}
						</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							{data?.lesson.description}
						</p>

						<div className="flex items-center mt-6 gap-4">
							<img
								src={data.lesson.teacher.avatarURL}
								className="rounded-full h-16 w-16 border-2 border-blue-500" 
								alt=""/>

							<div className="leading-relaxed">
								<span className="text-2xl font-bold">
									{data?.lesson.teacher.name}
								</span>
								<span className="text-gray-200 text-sm block">
									{data?.lesson.teacher.bio}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<a href="#"
							className="py-4 px-6 text-sm bg-green-500 gap-[10px] flex items-center 
						justify-center rounded uppercase font-bold hover:bg-green-700 transition-colors">
							<DiscordLogo size={24} />
							Comunidade no Discord
						</a>
						<a href="#"
							className="py-4 px-6 p- text-sm text-blue-500 rounded uppercase border border-blue-500 
						flex items-center gap-[10px] justify-center font-bold hover:bg-blue-500 hover:text-gray-700 transition-colors">
							<Lightning size={24} />
							Acesse o Desafio
						</a>
					</div>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-2">
					<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
						<div className="bg-green-700 h-full px-6 py-11">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">
								Material Complementar
							</strong>
							<p className="text-gray-200 mt-2">
								Acesse o material complementar para acelerar o seu desenvolvimento
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>
					<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
						<div className="bg-green-700 h-full px-6 py-11">
							<FileArrowDown size={40} />
						</div>
						<div className="py-6 leading-relaxed">
							<strong className="text-2xl">
								Wallpapers Exclusivos
							</strong>
							<p className="text-gray-200 mt-2">
								Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
							</p>
						</div>
						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}