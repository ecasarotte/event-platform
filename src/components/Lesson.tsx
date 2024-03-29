import { gql, useQuery } from '@apollo/client';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

	const isLessonAvailable = isPast(props.availableAt);
	const availableDateFormatted = format(props.availableAt, ("EEEE' • 'd' de 'MMMM' • 'k'h'mm"), {
		locale: ptBR
	});
	
	return (

		<Link to={`/event/lesson/${props.slug}`} className='group'>
			<span className="text-gray-300">
				{availableDateFormatted}
			</span>

			<div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
				<header className="flex items-center justify-between">
					{
						isLessonAvailable ? (
							<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
								<CheckCircle size={20} />
								Conteúdo liberado
							</span>
						) : (
							<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
								<Lock size={20} />
								Em breve
							</span>
						)
					}
					<span className="text-xs rounded border px-2 py-[2px] text-white border-green-300 font-bold">
						{props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<span className="mt-4 text-gray-200 block">
					<strong className="text-gray-200 mt-4 block">
						{props.title}
					</strong>
				</span>
			</div>
		</Link>

	)
}