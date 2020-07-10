import React from 'react';

const withAlert = (WrappedComponent: React.ComponentType<any>) => {
	const ComponentWithAlert = (props) => {
		return (
			<>
				<WrappedComponent {...props} />
				<article className="fixed bottom-0 left-0 right-0 mx-auto container w-full lg:w-1/2 flex-col justify-start">
					<section
						className="bg-blue-500 px-3 py-2 text-center overflow-y-auto"
						style={{ maxHeight: '10rem' }}
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quasi
						delectus inventore eum ea! Velit culpa ducimus aut nisi maiores
						laboriosam assumenda necessitatibus, consequatur et labore, incidunt
						porro, omnis modi? Cumque itaque consectetur, recusandae eos
						repudiandae impedit incidunt pariatur animi similique ex dolorum
						porro hic perspiciatis fugit iusto sint ratione ipsam asperiores
						reiciendis autem voluptas! Ullam distinctio totam animi sequi.
						Quisquam omnis architecto corrupti dolor ea excepturi, numquam cum
						at amet exercitationem soluta est aliquid nisi animi incidunt
						repudiandae adipisci? Iste debitis quae officia quo ut iusto culpa
						non laudantium. Numquam, magnam hic assumenda atque ut beatae at
						suscipit nobis, dolorem, veniam quos asperiores quod? Voluptatibus,
						enim itaque eveniet aut praesentium dolores possimus, quibusdam
						saepe eligendi voluptas, magni tempora id. Illum corporis laboriosam
						natus nostrum rerum at fugit, excepturi molestias praesentium aut
						mollitia debitis similique facere odio. Id dolorum aperiam cumque
						hic obcaecati nobis distinctio. Vitae error in nulla explicabo!
						Possimus neque consectetur ratione voluptatibus nesciunt culpa
						laudantium. Velit officiis dolorem voluptatum cum atque id at. Quis
						esse debitis provident laboriosam consequuntur labore recusandae
						consequatur sint. Eveniet explicabo ipsum non! Quos mollitia
						voluptatem magni nulla vel minus, hic quaerat id quas nam deleniti
						quod consectetur laboriosam veritatis ullam tempora, enim odio quo
						iusto praesentium sunt voluptate animi voluptatum iste? Et? Nostrum
						corrupti fugiat illo delectus voluptate laboriosam odio totam, ad
						placeat voluptatum ab neque libero numquam ducimus voluptas maiores
						commodi debitis fugit possimus earum atque in. Fugiat error rerum
						iste? Sit dolorem cum at odio! Praesentium ullam voluptate ab
						laboriosam culpa deserunt natus. Fugit porro quia mollitia obcaecati
						perspiciatis ab perferendis odio facilis at. Eius odit sint
						voluptates. Ipsam, minus. Corporis, facilis eos. Iste commodi
						explicabo mollitia doloribus autem cupiditate provident id
						asperiores nihil quasi, ratione sequi nam praesentium. Accusamus
						delectus voluptatum omnis impedit quaerat magnam eius adipisci
						aliquid perferendis.
					</section>
					<div className="self-center">Close</div>
				</article>
			</>
		);
	};
	return ComponentWithAlert;
};

export default withAlert;
