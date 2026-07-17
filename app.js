const questions = [
  {
    "id": 1,
    "category": "Cấu trúc câu",
    "prompt": "She ___ to work by bus every day.",
    "options": [
      "go",
      "goes",
      "going",
      "is go"
    ],
    "answer": 1,
    "explanation": "Chủ ngữ số ít ‘she’ cần động từ thêm -s ở hiện tại đơn."
  },
  {
    "id": 2,
    "category": "Cấu trúc câu",
    "prompt": "My brother and I ___ interested in English.",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "answer": 2,
    "explanation": "‘My brother and I’ là chủ ngữ số nhiều, dùng ‘are’."
  },
  {
    "id": 3,
    "category": "Cấu trúc câu",
    "prompt": "Chọn câu đúng.",
    "options": [
      "I don't understand this question.",
      "I am not understand this question.",
      "I don't understands this question.",
      "I not understand this question."
    ],
    "answer": 0,
    "explanation": "Phủ định hiện tại đơn: subject + do/does not + động từ nguyên mẫu."
  },
  {
    "id": 4,
    "category": "Chủ–vị",
    "prompt": "There ___ many reasons to learn another language.",
    "options": [
      "is",
      "are",
      "was",
      "has"
    ],
    "answer": 1,
    "explanation": "Danh từ sau ‘there’ là ‘many reasons’ số nhiều nên dùng ‘are’."
  },
  {
    "id": 5,
    "category": "Chủ–vị",
    "prompt": "Each of the students ___ a copy of the book.",
    "options": [
      "have",
      "are having",
      "has",
      "were having"
    ],
    "answer": 2,
    "explanation": "‘Each’ được xem là chủ ngữ số ít, vì vậy dùng ‘has’."
  },
  {
    "id": 6,
    "category": "Chủ–vị",
    "prompt": "The news ___ quite surprising.",
    "options": [
      "are",
      "were",
      "have been",
      "is"
    ],
    "answer": 3,
    "explanation": "‘News’ có -s nhưng là danh từ không đếm được và đi với động từ số ít."
  },
  {
    "id": 7,
    "category": "Thì động từ",
    "prompt": "I ___ in Singapore since 2023.",
    "options": [
      "live",
      "lived",
      "have lived",
      "am living"
    ],
    "answer": 2,
    "explanation": "‘Since + mốc thời gian’ và sự việc còn tiếp tục thường dùng hiện tại hoàn thành."
  },
  {
    "id": 8,
    "category": "Thì động từ",
    "prompt": "When I arrived, they ___ dinner.",
    "options": [
      "had",
      "were having",
      "have had",
      "are having"
    ],
    "answer": 1,
    "explanation": "Một hành động đang diễn ra thì hành động khác xen vào: quá khứ tiếp diễn."
  },
  {
    "id": 9,
    "category": "Thì động từ",
    "prompt": "By the time we reached the station, the train ___.",
    "options": [
      "left",
      "has left",
      "had left",
      "was leaving"
    ],
    "answer": 2,
    "explanation": "Hành động tàu rời đi xảy ra trước một mốc trong quá khứ: quá khứ hoàn thành."
  },
  {
    "id": 10,
    "category": "Mạo từ & danh từ",
    "prompt": "I need ___ information about the course.",
    "options": [
      "an",
      "a",
      "some",
      "many"
    ],
    "answer": 2,
    "explanation": "‘Information’ không đếm được: dùng ‘some information’, không dùng ‘an’."
  },
  {
    "id": 11,
    "category": "Mạo từ & danh từ",
    "prompt": "She bought ___ umbrella because it was raining.",
    "options": [
      "a",
      "an",
      "the",
      "— (không mạo từ)"
    ],
    "answer": 1,
    "explanation": "‘Umbrella’ bắt đầu bằng nguyên âm khi phát âm và được nhắc lần đầu: dùng ‘an’."
  },
  {
    "id": 12,
    "category": "Mạo từ & danh từ",
    "prompt": "Which phrase is correct?",
    "options": [
      "an advice",
      "two advices",
      "a piece of advice",
      "many advice"
    ],
    "answer": 2,
    "explanation": "‘Advice’ không đếm được; muốn đếm dùng ‘a piece of advice’."
  },
  {
    "id": 13,
    "category": "Đại từ & từ hạn định",
    "prompt": "This phone belongs to Anna. It is ___.",
    "options": [
      "her",
      "hers",
      "she",
      "herself"
    ],
    "answer": 1,
    "explanation": "Sau ‘is’ và không có danh từ đi kèm, dùng đại từ sở hữu ‘hers’."
  },
  {
    "id": 14,
    "category": "Đại từ & từ hạn định",
    "prompt": "___ of the two answers is correct.",
    "options": [
      "Neither",
      "None",
      "Any",
      "Every"
    ],
    "answer": 0,
    "explanation": "‘Neither of the two’ nghĩa là không đáp án nào trong hai đáp án."
  },
  {
    "id": 15,
    "category": "Đại từ & từ hạn định",
    "prompt": "I met a friend of ___ at the conference.",
    "options": [
      "me",
      "my",
      "mine",
      "myself"
    ],
    "answer": 2,
    "explanation": "Cấu trúc sở hữu kép: ‘a friend of mine’."
  },
  {
    "id": 16,
    "category": "Tính từ & trạng từ",
    "prompt": "She speaks English very ___.",
    "options": [
      "fluent",
      "fluently",
      "more fluent",
      "fluency"
    ],
    "answer": 1,
    "explanation": "Cần trạng từ ‘fluently’ để bổ nghĩa cho động từ ‘speaks’."
  },
  {
    "id": 17,
    "category": "Tính từ & trạng từ",
    "prompt": "This exercise is ___ than the previous one.",
    "options": [
      "much difficult",
      "more much difficult",
      "much more difficult",
      "most difficult"
    ],
    "answer": 2,
    "explanation": "So sánh hơn của ‘difficult’ là ‘more difficult’; ‘much’ dùng để nhấn mạnh."
  },
  {
    "id": 18,
    "category": "Tính từ & trạng từ",
    "prompt": "It was ___ film I had ever seen.",
    "options": [
      "more interesting",
      "the most interesting",
      "most interesting",
      "the more interesting"
    ],
    "answer": 1,
    "explanation": "So sánh nhất cần ‘the most + adjective’."
  },
  {
    "id": 19,
    "category": "Giới từ & liên từ",
    "prompt": "He is interested ___ environmental issues.",
    "options": [
      "on",
      "at",
      "in",
      "for"
    ],
    "answer": 2,
    "explanation": "Cụm cố định: ‘be interested in’."
  },
  {
    "id": 20,
    "category": "Giới từ & liên từ",
    "prompt": "___ it was raining, we continued walking.",
    "options": [
      "Because",
      "Although",
      "Despite",
      "So"
    ],
    "answer": 1,
    "explanation": "‘Although + mệnh đề’ diễn tả sự tương phản. ‘Despite’ phải đi với danh từ/V-ing."
  },
  {
    "id": 21,
    "category": "Giới từ & liên từ",
    "prompt": "Who is responsible ___ checking these documents?",
    "options": [
      "to",
      "with",
      "of",
      "for"
    ],
    "answer": 3,
    "explanation": "Cụm cố định: ‘be responsible for + noun/V-ing’."
  },
  {
    "id": 22,
    "category": "Động từ khuyết thiếu",
    "prompt": "Passengers ___ wear a seat belt during take-off.",
    "options": [
      "must",
      "would",
      "might",
      "used to"
    ],
    "answer": 0,
    "explanation": "‘Must’ diễn tả nghĩa vụ bắt buộc ở hiện tại."
  },
  {
    "id": 23,
    "category": "Động từ khuyết thiếu",
    "prompt": "Someone ___ the letter to the wrong address.",
    "options": [
      "might send",
      "might have sent",
      "might has sent",
      "might have send"
    ],
    "answer": 1,
    "explanation": "Suy đoán về quá khứ: modal + have + V3."
  },
  {
    "id": 24,
    "category": "Động từ khuyết thiếu",
    "prompt": "You ___ me earlier. I could have helped.",
    "options": [
      "should tell",
      "should have told",
      "must tell",
      "would tell"
    ],
    "answer": 1,
    "explanation": "‘Should have + V3’ diễn tả một việc lẽ ra nên làm trong quá khứ."
  },
  {
    "id": 25,
    "category": "V-ing & to-infinitive",
    "prompt": "I enjoy ___ English podcasts.",
    "options": [
      "listen",
      "to listen",
      "listening to",
      "to listening"
    ],
    "answer": 2,
    "explanation": "‘Enjoy’ đi với V-ing; ‘listen’ cần giới từ ‘to’."
  },
  {
    "id": 26,
    "category": "V-ing & to-infinitive",
    "prompt": "They decided ___ the meeting until Monday.",
    "options": [
      "postpone",
      "postponing",
      "to postpone",
      "postponed"
    ],
    "answer": 2,
    "explanation": "‘Decide’ đi với ‘to + động từ nguyên mẫu’."
  },
  {
    "id": 27,
    "category": "V-ing & to-infinitive",
    "prompt": "People in England ___ beer for breakfast years ago.",
    "options": [
      "used to drink",
      "were used to drink",
      "used to drinking",
      "use to drank"
    ],
    "answer": 0,
    "explanation": "‘Used to + V’ diễn tả thói quen từng có trong quá khứ nhưng nay không còn."
  },
  {
    "id": 28,
    "category": "Câu bị động",
    "prompt": "English ___ in many countries.",
    "options": [
      "speaks",
      "is spoken",
      "is speaking",
      "has spoke"
    ],
    "answer": 1,
    "explanation": "Hiện tại đơn bị động: am/is/are + V3."
  },
  {
    "id": 29,
    "category": "Câu bị động",
    "prompt": "The letter ___ to the wrong address.",
    "options": [
      "might have been sent",
      "might has been sent",
      "might be send",
      "might have sent"
    ],
    "answer": 0,
    "explanation": "Bị động với modal ở quá khứ: modal + have been + V3."
  },
  {
    "id": 30,
    "category": "Câu bị động",
    "prompt": "Please wait outside. The room ___ right now.",
    "options": [
      "is cleaned",
      "is being cleaned",
      "has cleaned",
      "was cleaning"
    ],
    "answer": 1,
    "explanation": "Hành động đang diễn ra ở dạng bị động: am/is/are being + V3."
  },
  {
    "id": 31,
    "category": "Câu điều kiện",
    "prompt": "If I ___ more free time, I would learn Japanese.",
    "options": [
      "have",
      "had",
      "would have",
      "will have"
    ],
    "answer": 1,
    "explanation": "Điều kiện loại 2: If + quá khứ đơn, would + V."
  },
  {
    "id": 32,
    "category": "Câu điều kiện",
    "prompt": "If water reaches 100°C, it ___.",
    "options": [
      "boils",
      "will boil",
      "would boil",
      "boiled"
    ],
    "answer": 0,
    "explanation": "Sự thật hiển nhiên dùng điều kiện loại 0: hiện tại đơn ở cả hai mệnh đề."
  },
  {
    "id": 33,
    "category": "Câu điều kiện",
    "prompt": "If she had studied harder, she ___ the exam.",
    "options": [
      "would pass",
      "will have passed",
      "would have passed",
      "passed"
    ],
    "answer": 2,
    "explanation": "Điều kiện loại 3: If + had V3, would have + V3."
  },
  {
    "id": 34,
    "category": "Mệnh đề & tường thuật",
    "prompt": "The woman ___ lives next door is a doctor.",
    "options": [
      "which",
      "whose",
      "who",
      "where"
    ],
    "answer": 2,
    "explanation": "Đại từ quan hệ ‘who’ thay cho người và làm chủ ngữ trong mệnh đề."
  },
  {
    "id": 35,
    "category": "Mệnh đề & tường thuật",
    "prompt": "‘I am tired,’ she said. → She said that she ___ tired.",
    "options": [
      "is",
      "was",
      "has been",
      "will be"
    ],
    "answer": 1,
    "explanation": "Khi động từ tường thuật ở quá khứ, ‘am’ thường lùi thì thành ‘was’."
  },
  {
    "id": 36,
    "category": "Mệnh đề & tường thuật",
    "prompt": "Do you know ___?",
    "options": [
      "where is the station",
      "where the station is",
      "where does the station locate",
      "the station where is"
    ],
    "answer": 1,
    "explanation": "Câu hỏi gián tiếp dùng trật tự câu kể: từ hỏi + chủ ngữ + động từ."
  }
];

const categories = [...new Set(questions.map((q) => q.category))];
const STORAGE_KEY = "ielts-grammar-diagnostic-v1";
let state = loadState();
let copiedTimer;

function initialState() {
  return { started: false, current: 0, answers: {}, submitted: false, copied: false, showReview: false };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? { ...initialState(), ...saved, copied: false } : initialState();
  } catch { return initialState(); }
}

function saveState() {
  const { copied, ...persisted } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function getLevel(score) {
  if (score <= 12) return { code: "A1", title: "Cần xây lại nền", note: "Nên củng cố cấu trúc câu, động từ và các thì cơ bản trước khi học IELTS theo dạng đề." };
  if (score <= 21) return { code: "A2", title: "Nền tảng sơ cấp", note: "Có thể bắt đầu Pre-IELTS, nhưng nên học ngữ pháp song song và chưa cần ép làm đề nhanh." };
  if (score <= 28) return { code: "A2+ / B1", title: "Sẵn sàng cho Get Ready", note: "Bạn có nền phù hợp để học Get Ready for IELTS; cần ưu tiên các nhóm có điểm dưới 2/3." };
  if (score <= 33) return { code: "B1", title: "Nền tảng khá chắc", note: "Có thể học Get Ready nhanh hơn và bắt đầu luyện cách dùng ngữ pháp trong Writing/Speaking." };
  return { code: "B1+ / B2", title: "Nền tảng tốt", note: "Ngữ pháp nhận biết tốt. Bước tiếp theo là kiểm tra khả năng tự dùng trong Writing và Speaking." };
}

function stats() {
  const answered = Object.keys(state.answers).length;
  const score = questions.filter((q) => state.answers[q.id] === q.answer).length;
  const level = getLevel(score);
  const categoryScores = categories.map((category) => {
    const items = questions.filter((q) => q.category === category);
    return { category, correct: items.filter((q) => state.answers[q.id] === q.answer).length, total: items.length };
  });
  const incorrect = questions.filter((q) => state.answers[q.id] !== q.answer);
  return { answered, score, level, categoryScores, incorrect };
}

function esc(value) {
  return String(value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&#039;" }[char]));
}

function render() {
  const app = document.getElementById("app");
  if (!state.started) app.innerHTML = introView();
  else if (state.submitted) app.innerHTML = resultsView();
  else app.innerHTML = quizView();
}

function introView() {
  return `<main class="shell intro-shell">
    <section class="intro-card">
      <div class="eyebrow"><span class="eyebrow-dot"></span> Pre-IELTS diagnostic</div>
      <h1>Grammar,<br><em>đang ở đâu?</em></h1>
      <p class="intro-copy">Bài kiểm tra nhanh để xác định phần ngữ pháp bạn đã chắc, phần còn hổng và mức độ sẵn sàng với <strong>Get Ready for IELTS</strong>.</p>
      <div class="test-facts"><div><strong>36</strong><span>câu hỏi</span></div><div><strong>12</strong><span>chủ điểm</span></div><div><strong>20′</strong><span>gợi ý</span></div></div>
      <button class="primary-button" onclick="startTest()">Bắt đầu kiểm tra <span>→</span></button>
      <p class="fine-print">Không dùng từ điển hoặc công cụ dịch. Nếu không chắc, hãy chọn đáp án bạn thấy tự nhiên nhất.</p>
    </section>
    <aside class="topic-panel"><p class="panel-label">Nội dung đánh giá</p><div class="topic-list">${categories.map((category, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span>${esc(category)}</div>`).join("")}</div><div class="quote-card">“Mục tiêu không phải là điểm cao — mà là biết chính xác nên học gì tiếp theo.”</div></aside>
  </main>`;
}

function quizView() {
  const { answered } = stats();
  const q = questions[state.current];
  return `<main class="quiz-page">
    <header class="topbar"><div class="brand"><span>G</span> Grammar Diagnostic</div><div class="progress-label">Đã trả lời <strong>${answered}/${questions.length}</strong></div></header>
    <div class="progress-line"><div style="width:${answered / questions.length * 100}%"></div></div>
    <div class="quiz-layout">
      <aside class="quiz-nav"><p class="panel-label">Câu hỏi</p><div class="number-grid">${questions.map((item, index) => `<button aria-label="Câu ${item.id}" class="${index === state.current ? "active" : ""} ${state.answers[item.id] !== undefined ? "answered" : ""}" onclick="goTo(${index})">${item.id}</button>`).join("")}</div><div class="nav-key"><span><i class="key-current"></i> Hiện tại</span><span><i class="key-done"></i> Đã chọn</span></div></aside>
      <section class="question-card"><div class="question-meta"><span>Câu ${String(q.id).padStart(2, "0")}</span><span>${esc(q.category)}</span></div><h1>${esc(q.prompt)}</h1>
        <div class="options">${q.options.map((option, index) => `<button class="${state.answers[q.id] === index ? "selected" : ""}" onclick="selectAnswer(${index})"><span>${String.fromCharCode(65 + index)}</span><p>${esc(option)}</p><i>✓</i></button>`).join("")}</div>
        ${answered < questions.length && state.current === questions.length - 1 ? `<p class="missing-note">Bạn còn ${questions.length - answered} câu chưa trả lời. Bấm Hoàn thành để quay về câu bỏ trống đầu tiên.</p>` : ""}
        <div class="question-actions"><button class="back-button" ${state.current === 0 ? "disabled" : ""} onclick="previousQuestion()">← Câu trước</button>${state.current < questions.length - 1 ? `<button class="primary-button compact" onclick="nextQuestion()">Câu tiếp theo →</button>` : `<button class="primary-button compact" onclick="submitTest()">Hoàn thành bài test</button>`}</div>
      </section>
    </div>
  </main>`;
}

function resultsView() {
  const { score, level, categoryScores, incorrect } = stats();
  const ordered = [...categoryScores].sort((a, b) => a.correct - b.correct).slice(0, 4);
  return `<main class="results-page">
    <header class="topbar"><div class="brand"><span>G</span> Grammar Diagnostic</div><button class="text-button" onclick="resetTest()">Làm lại</button></header>
    <section class="result-hero"><div><p class="eyebrow result-eyebrow">Kết quả của bạn</p><h1>${esc(level.title)}</h1><p>${esc(level.note)}</p><div class="result-actions"><button class="primary-button compact" onclick="copyResult()">${state.copied ? "Đã sao chép ✓" : "Sao chép để gửi review"}</button><button class="secondary-button" onclick="toggleReview()">${state.showReview ? "Ẩn chữa bài" : `Xem ${incorrect.length} câu cần chữa`}</button></div></div><div class="score-orbit"><div><strong>${score}</strong><span>/ 36</span></div><p>${esc(level.code)}</p></div></section>
    <section class="results-grid"><div class="result-card wide"><div class="card-heading"><div><p class="panel-label">Bản đồ năng lực</p><h2>Điểm theo chủ điểm</h2></div><div class="legend"><i></i> Cần ưu tiên</div></div><div class="skill-list">${categoryScores.map((item) => `<div class="skill-row"><span>${esc(item.category)}</span><div class="skill-track"><div class="${item.correct < 2 ? "weak" : ""}" style="width:${item.correct / item.total * 100}%"></div></div><strong>${item.correct}/${item.total}</strong></div>`).join("")}</div></div>
      <aside class="result-card priority-card"><p class="panel-label">Thứ tự ôn tập</p><h2>Nên học tiếp</h2><ol>${ordered.map((item) => `<li><span>${esc(item.category)}</span><strong>${item.correct}/${item.total}</strong></li>`).join("")}</ol><p class="disclaimer">Mức CEFR chỉ là ước lượng từ bài trắc nghiệm ngữ pháp, không phải IELTS band score.</p></aside></section>
    ${state.showReview ? `<section class="review-section"><div class="review-title"><p class="panel-label">Chữa bài</p><h2>${incorrect.length ? "Các câu bạn cần xem lại" : "Bạn đã trả lời đúng toàn bộ"}</h2></div><div class="review-list">${incorrect.map((q) => `<article class="review-item"><div class="review-number">${String(q.id).padStart(2, "0")}</div><div><p class="review-category">${esc(q.category)}</p><h3>${esc(q.prompt)}</h3><p class="answer-wrong">Bạn chọn: ${esc(q.options[state.answers[q.id]])}</p><p class="answer-right">Đúng: ${esc(q.options[q.answer])}</p><p class="explanation">${esc(q.explanation)}</p></div></article>`).join("")}</div></section>` : ""}
  </main>`;
}

function startTest() { state.started = true; saveState(); render(); }
function goTo(index) { state.current = index; saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function selectAnswer(index) { state.answers[questions[state.current].id] = index; saveState(); render(); }
function previousQuestion() { if (state.current > 0) goTo(state.current - 1); }
function nextQuestion() { if (state.current < questions.length - 1) goTo(state.current + 1); }
function submitTest() {
  const { answered } = stats();
  if (answered < questions.length) { state.current = questions.findIndex((q) => state.answers[q.id] === undefined); saveState(); render(); return; }
  state.submitted = true; saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function resetTest() { if (!confirm("Bạn muốn xóa kết quả và làm lại từ đầu?")) return; localStorage.removeItem(STORAGE_KEY); state = initialState(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function toggleReview() { state.showReview = !state.showReview; saveState(); render(); if (state.showReview) setTimeout(() => document.querySelector(".review-section")?.scrollIntoView({ behavior: "smooth" }), 0); }

function resultText() {
  const { score, level, categoryScores, incorrect } = stats();
  const weak = categoryScores.filter((c) => c.correct < 2).map((c) => `${c.category} ${c.correct}/${c.total}`).join(", ") || "Không có nhóm dưới 2/3";
  return ["KẾT QUẢ IELTS GRAMMAR DIAGNOSTIC", `Tổng điểm: ${score}/${questions.length}`, `Mức tham khảo: ${level.code} — ${level.title}`, `Nhóm cần ưu tiên: ${weak}`, `Câu sai: ${incorrect.map((q) => q.id).join(", ") || "Không có"}`, "Chi tiết:", ...categoryScores.map((c) => `- ${c.category}: ${c.correct}/${c.total}`)].join("\\n");
}

async function copyResult() {
  const text = resultText();
  try { await navigator.clipboard.writeText(text); }
  catch {
    const area = document.createElement("textarea"); area.value = text; area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove();
  }
  state.copied = true; render(); clearTimeout(copiedTimer); copiedTimer = setTimeout(() => { state.copied = false; render(); }, 1800);
}

render();
