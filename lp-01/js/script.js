const contentItems = [
	{
		title: "脱衣所",
		description: "木のぬくもりと、どこか懐かしい鏡。湯上がり支度もゆっくりどうぞ。",
		image: "https://placehold.jp/600x400.png?text=Item",
		imageAlt: "脱衣所のイメージ"
	},
	{
		title: "休憩室",
		description: "湯上がりの一杯を片手に、火照りが落ち着くまでひと休み。",
		image: "https://placehold.jp/600x400.png?text=Item",
		imageAlt: "休憩室のイメージ"
	},
	{
		title: "お風呂",
		description: "大きな湯船で肩まで浸かれば、今日の疲れもじんわりほどけます。",
		image: "https://placehold.jp/600x400.png?text=Item",
		imageAlt: "浴場のイメージ"
	}
];

const customerVoices = [
	{
		name: "近所にお住まいのお客さま",
		quote: "番台のおかみさんの笑顔に、いつも元気をもらっています。お湯も気持ちよくて、帰り道は体が軽いです。",
		avatar: "https://placehold.jp/150x150.png?text=User"
	},
	{
		name: "お仕事帰りのお客さま",
		quote: "大きなお風呂に入ると、頭の中までさっぱり。静かな休憩室もお気に入りです。",
		avatar: "https://placehold.jp/150x150.png?text=User"
	},
	{
		name: "ご家族でご来店のお客さま",
		quote: "子どもにもやさしく声をかけてくれて、家族みんなで安心して通えます。",
		avatar: "https://placehold.jp/150x150.png?text=User"
	}
];

const faqItems = [
	{
		question: "初めてでも利用できますか？",
		answer: "もちろんです。受付で入浴券をお求めください。わからないことは番台へ気軽にお声がけください。"
	},
	{
		question: "タオルやシャンプーはありますか？",
		answer: "タオルや基本的なアメニティは受付で販売しています。手ぶらでもご利用いただけます。"
	},
	{
		question: "駐車場・駐輪場はありますか？",
		answer: "自転車置き場をご用意しています。駐車場はありませんので、公共交通機関をご利用ください。"
	},
	{
		question: "定休日や営業時間を教えてください。",
		answer: "営業時間は15時から23時まで、毎週水曜日がお休みです。臨時休業の際は店頭でお知らせします。"
	}
];

const contentList = document.querySelector("#content-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

function renderContentItems() {
	contentItems.forEach((item, index) => {
		const article = document.createElement("article");
		article.className = "content-card";

		const imageWrap = document.createElement("div");
		imageWrap.className = "content-image-wrap";
		const image = document.createElement("img");
		image.src = item.image;
		image.alt = item.imageAlt;
		image.loading = "lazy";
		const number = document.createElement("span");
		number.className = "content-index";
		number.textContent = `0${index + 1}`;
		imageWrap.append(image, number);

		const heading = document.createElement("h3");
		heading.textContent = item.title;
		const description = document.createElement("p");
		description.textContent = item.description;
		article.append(imageWrap, heading, description);
		contentList.append(article);
	});
}

function renderVoices() {
	customerVoices.forEach((voice) => {
		const article = document.createElement("article");
		article.className = "voice-card";
		const avatar = document.createElement("img");
		avatar.src = voice.avatar;
		avatar.alt = "";
		avatar.loading = "lazy";
		const quote = document.createElement("blockquote");
		quote.textContent = voice.quote;
		const cite = document.createElement("cite");
		cite.textContent = voice.name;
		article.append(avatar, quote, cite);
		voiceList.append(article);
	});
}

function renderFaq() {
	faqItems.forEach((item, index) => {
		const wrapper = document.createElement("section");
		wrapper.className = "faq-item";
		const button = document.createElement("button");
		const answerId = `faq-answer-${index + 1}`;
		button.className = "faq-question";
		button.type = "button";
		button.setAttribute("aria-expanded", "false");
		button.setAttribute("aria-controls", answerId);

		const letter = document.createElement("span");
		letter.className = "faq-letter";
		letter.textContent = "Q";
		const question = document.createElement("span");
		question.className = "faq-question-label";
		question.textContent = item.question;
		const toggle = document.createElement("span");
		toggle.className = "faq-toggle";
		toggle.setAttribute("aria-hidden", "true");
		button.append(letter, question, toggle);

		const answer = document.createElement("div");
		answer.className = "faq-answer";
		answer.id = answerId;
		answer.setAttribute("aria-hidden", "true");
		const answerInner = document.createElement("div");
		answerInner.className = "faq-answer-inner";
		const answerText = document.createElement("p");
		answerText.textContent = item.answer;
		answerInner.append(answerText);
		answer.append(answerInner);
		wrapper.append(button, answer);
		faqList.append(wrapper);

		button.addEventListener("click", () => {
			const isExpanded = button.getAttribute("aria-expanded") === "true";
			button.setAttribute("aria-expanded", String(!isExpanded));
			answer.setAttribute("aria-hidden", String(isExpanded));
			wrapper.classList.toggle("is-open", !isExpanded);
		});
	});
}

renderContentItems();
renderVoices();
renderFaq();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
