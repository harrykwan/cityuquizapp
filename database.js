var mydata = [{
	id: "trial",
	name: "試玩",
	type: "pointchoose",
	readme: "Let's try",
	questions: ['Rate for this app','Rate for today','Rate for yourself'],
	answer: ['bad','can be better','fair','quite good','very good'],
	calculate: [{
		id: "A",
		name: "Your score",
		marksorder: [0,0,0],
		questions: [1,2,3]
	}]
},{
	id: "myquiz1",
	name: "人格測試一",
	type: "pointchoose",
	readme: "在這個測試裡，有一些形容人們性格的短句。在每一短句之後，有五個選擇。請在五個選擇中，選取最能確切形容你現時的感受和行為。這不是測驗，並沒有所謂正確的答案。請你回答所有問題。",
	questions: ['在社交聚會中很受歡迎','很少關心別人','經常作好準備','容易感到壓力','有豐富的詞彙','寡言','對別人感興趣','把隨身的物件隨處擺放','大部份時間是輕鬆的','對理解抽象的概念有困難','在人群中，感覺自如','侮辱別人','注意細節','凡事太憂慮','有豐富的想像力','避開別人的注意','同情別人','把事情弄得一團糟','很少感到憂鬱','對抽象的概念不感興趣','主動和別人交談','對別人的麻煩不感興趣','毫不耽擱地處理瑣事','容易受困擾','有卓越的見解','很少說話','有同情心','常忘記把物件放回原位','容易感到煩惱','沒有豐富的想像力','在派對中，和不同的人傾談','對別人的事情毫不感興趣','喜歡井井有條','喜怒無常','很快便能理解事物','不喜歡別人注意自己','願意花時間於別人身上','逃避責任','情緒大起大落','用艱深的詞彙','不介意成為眾人焦點','體會別人的情緒','跟著計劃辦事','很容易被激怒','花時間自我反省','在陌生人中，保持沈默','令別人感到輕鬆快樂','事事追求完美','常感到憂鬱','有很多構想'],
	answer: ['非常不準確','頗不準確','既非不準確<br>也不是準確','頗準確','非常準確'],
	calculate: [{
		id: "A",
		name: "Agreeableness",
		marksorder: [4,4,4,4,0,0,0,0,0,0],
		questions: [2,12,22,32,7,17,27,37,42,47]
	},{
		id: "C",
		name: "Conscientiousness",
		marksorder: [4,4,4,4,0,0,0,0,0,0],
		questions: [8,18,28,38,3,13,23,33,43,48]
	},{
		id: "E",
		name: "Extraversion",
		marksorder: [4,4,4,4,4,0,0,0,0,0],
		questions: [6,16,26,36,46,1,11,21,31,41]
	},{
		id: "N",
		name: "Neuroticism/Emotional Instability",
		marksorder: [4,4,0,0,0,0,0,0,0,0],
		questions: [9,19,4,14,24,29,34,39,44,49]
	},{
		id: "O",
		name: "Openness to experience",
		marksorder: [4,4,4,0,0,0,0,0,0,0],
		questions: [10,20,30,5,15,25,35,40,45,50]
	}]
}];
