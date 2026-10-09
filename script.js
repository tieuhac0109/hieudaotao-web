const translations = {
  en: {
    // Navigation
    'nav.workflow': 'Core workflow',
    'nav.prototype': 'Prototype',
    'nav.usecases': 'Use cases',
    'nav.whyclaude': 'Why Claude',
    'nav.evaluation': 'Evaluation',
    'nav.about': 'About',
    'nav.contact': 'Pilot with us',

    // Hero
    'hero.eyebrow': 'Early-stage EdTech · Vietnam',
    'hero.title': 'AI workflows built for the complexity of higher education.',
    'hero.lead': 'HieuDaoTao is an early-stage AI platform focused on understanding academic regulations and turning complex higher-education documents into source-grounded, human-verified workflows.',
    'hero.pipe1': 'Academic regulations',
    'hero.pipe2': 'AI-assisted reasoning',
    'hero.pipe3': 'Cited answers',
    'hero.pipe4': 'Human verification',
    'hero.cta_prototype': 'Try live prototype ↗',
    'hero.cta_explore': 'Explore the workflow',
    'hero.cta2': 'Join our pilot program →',
    'hero.trust': 'Working prototype deployed · Human-in-the-loop by design · Built for Vietnamese higher education contexts',

    // Browser Mockup
    'mockup.title': 'HieuDaoTao Workspace',
    'mockup.status': 'Live Prototype',
    'mockup.doc_name': 'quy-che-dao-tao-mau.pdf',
    'mockup.doc_meta': '3 pages · Vietnamese regulation',
    'mockup.processed': 'Analyzed',
    'mockup.question': 'What are the graduation eligibility conditions in this regulation?',
    'mockup.ai_chip': 'AI-assisted answer',
    'mockup.answer': 'Graduation eligibility is defined in Article 18. Students are recognized for graduation when their cumulative GPA reaches 2.00 or higher on a 4.0 scale and they satisfy the foreign language exit benchmark.',
    'mockup.src': 'Page 3 · Art. 18, Cl. 1',
    'mockup.verified_badge': '✓ Verified against source',
    'mockup.warning': 'Human verification notice: AI-assisted output. Verify all conclusions against official institutional documents.',

    // Problem
    'problem.label': 'The problem',
    'problem.title': 'Academic administration runs on interconnected regulations, fragmented documents, and manual verification.',
    'problem.lead': 'Higher-education operations cannot rely on generic chatbots or unverifiable summaries. Every operational interpretation carries institutional responsibility.',
    'problem.p1.title': 'Interconnected regulations',
    'problem.p1.body': 'Policies, decrees, and training regulations span hundreds of pages across multiple academic years, creating high cognitive load for staff.',
    'problem.p2.title': 'Fragmented policy documents',
    'problem.p2.body': 'Guidelines, admissions circulars, procedural notices, and amendments are scattered across departments, spreadsheets, and file drives.',
    'problem.p3.title': 'Costly manual cross-checking',
    'problem.p3.body': 'Staff expend hours searching manually to reconcile conflicting clauses, verify exceptions, and cross-reference conditions before advising students.',
    'problem.p4.title': 'Difficult source traceability',
    'problem.p4.body': 'Informal advice or generic AI tools lack citations back to authoritative clauses, making answers risky to rely on for administrative actions.',

    // Core Workflow
    'workflow.label': 'Core workflow',
    'workflow.title': 'From dense academic documents to human-verified decisions.',
    'workflow.lead': 'A structured, traceable pipeline built around verifiable evidence and human oversight.',
    'workflow.s1.step': 'Step 01',
    'workflow.s1.title': 'Institution documents',
    'workflow.s1.body': 'Ingest official academic regulations, admission policies, circulars, and operational guidelines in text-based PDF format.',
    'workflow.s1.tag1': 'Academic regulations',
    'workflow.s1.tag2': 'Admission policies',
    'workflow.s1.tag3': 'Procedural guidelines',
    'workflow.s2.step': 'Step 02',
    'workflow.s2.title': 'Document extraction & reasoning',
    'workflow.s2.body': 'Page-by-page text parsing, structured context formatting, and policy-grounded AI reasoning across interconnected clauses.',
    'workflow.s2.tag1': 'Page tracking',
    'workflow.s2.tag2': 'Policy reasoning',
    'workflow.s2.tag3': 'Structured extraction',
    'workflow.s3.step': 'Step 03',
    'workflow.s3.title': 'Grounded output',
    'workflow.s3.body': 'Synthesize structured answers with specific clause citations, 1-based page numbers, and verbatim supporting evidence.',
    'workflow.s3.tag1': 'Cited answers',
    'workflow.s3.tag2': 'Page citations',
    'workflow.s3.tag3': 'Supporting evidence',
    'workflow.s4.step': 'Step 04',
    'workflow.s4.title': 'Server verification & human review',
    'workflow.s4.body': 'Server-side quotation verification independently checks evidence against source text before accountable staff review.',
    'workflow.s4.tag1': 'Quotation verification',
    'workflow.s4.tag2': 'Human oversight',

    // Working Prototype
    'prototype.label': 'Working prototype',
    'prototype.title': 'Working prototype & live validation',
    'prototype.lead': 'HieuDaoTao now has a deployed working prototype for academic policy intelligence. Upload a text-based academic regulation PDF, ask a policy question, and review a source-grounded answer with page-level supporting evidence.',
    'prototype.badge': 'Live prototype · Deployed at prototype.hieudaotao.io.vn',

    // Prototype Capabilities
    'prototype.c1.title': 'Long-document policy analysis',
    'prototype.c1.body': 'Processes text-based institutional regulation PDFs with preserved page boundaries.',
    'prototype.c2.title': 'Grounded Q&A',
    'prototype.c2.body': 'Answers administrative questions strictly from the supplied document without generic speculation.',
    'prototype.c3.title': 'Source evidence context',
    'prototype.c3.body': 'Pinpoints relevant articles, clauses, and 1-based page locations for every substantive claim.',
    'prototype.c4.title': 'Server-side evidence verification',
    'prototype.c4.body': 'Independently checks whether each quoted passage exists verbatim in the stated page text.',
    'prototype.c5.title': 'Human-in-the-loop oversight',
    'prototype.c5.body': 'Formats outputs for rapid human audit, keeping staff accountable for official administrative decisions.',

    // Workflow Preview Card & CTA
    'prototype.preview_label': 'Workflow preview',
    'prototype.preview_title': 'Academic Policy Intelligence Pipeline',
    'prototype.preview_doc': 'quy-che-dao-tao-mau.pdf',
    'prototype.preview_doc_meta': 'Sample Academic Regulation · 3 pages',
    'prototype.preview_q': 'What are the graduation eligibility conditions in this regulation?',
    'prototype.preview_ans': 'Graduation eligibility is defined in Article 18. Students are recognized for graduation when their cumulative GPA reaches 2.00 or higher on a 4.0 scale and they satisfy the foreign language exit benchmark.',
    'prototype.preview_evidence_tag': 'Page 3 · Điều 18, Khoản 1',
    'prototype.preview_verified': '✓ Verified against source',
    'prototype.preview_quote': '“Sinh viên được công nhận tốt nghiệp khi điểm trung bình chung tích lũy toàn khóa đạt từ 2.00 trở lên theo thang điểm 4 và đạt chuẩn đầu ra ngoại ngữ...”',
    'prototype.cta_btn': 'Try the live prototype ↗',
    'prototype.disclaimer': 'Prototype use only. Do not upload confidential or sensitive documents. AI-assisted outputs require verification against the original source.',

    // Prototype Limitations
    'prototype.limits.title': 'Prototype limitations',
    'prototype.limits.l1': 'Text-based PDFs only: Scanned documents requiring OCR are not yet supported.',
    'prototype.limits.l2': 'Upload size limits: Individual uploads are currently constrained to 4.5 MB by serverless platform limits.',
    'prototype.limits.l3': 'Human verification required: AI-generated interpretations assist staff and require review against the original source.',
    'prototype.limits.l4': 'Non-binding output: Prototype results do not constitute official institutional decisions or legal advice.',

    // Initial Use Cases
    'usecases.label': 'Initial use cases',
    'usecases.title': 'Focused on workflows where context and traceability matter.',
    'usecases.lead': 'We prioritize high-stakes document reasoning before expanding to adjacent administrative tasks.',
    'usecases.primary.badge': 'Primary Wedge · Active Prototype',
    'usecases.primary.title': 'Academic Policy Intelligence',
    'usecases.primary.body': 'Understanding academic regulations and producing source-grounded operational answers. In-depth analysis of training regulations, grading rules, graduation criteria, and policy changes across student cohorts with clear clause-level citations.',
    'usecases.adj1.badge': 'Adjacent · Validation Concept',
    'usecases.adj1.title': 'Admissions Policy Analysis',
    'usecases.adj1.body': 'Extract eligibility requirements, compare policy provisions across admissions cycles, and assist admissions officers with fast, grounded references.',
    'usecases.adj2.badge': 'Adjacent · Exploration',
    'usecases.adj2.title': 'Institutional Knowledge Assistant',
    'usecases.adj2.body': 'Help staff navigate approved internal documentation, procedural handbooks, and operational guidelines without manual cross-document searching.',
    'usecases.adj3.badge': 'Adjacent · Exploration',
    'usecases.adj3.title': 'Administrative Record Review',
    'usecases.adj3.body': 'Assist humans in identifying inconsistencies, missing fields, or conflicting information between student records and official policies.',

    // Why Claude
    'whyclaude.label': 'Why Claude',
    'whyclaude.title': 'Technical fit for long-form academic reasoning and verifiable workflows.',
    'whyclaude.lead': 'HieuDaoTao is designed with a provider-agnostic reasoning layer. We are particularly interested in evaluating Claude for policy-intensive higher-education workflows where long-document reasoning, grounded outputs, structured tool use, and reliable human review are critical.',
    'whyclaude.t1.title': 'Long-document reasoning',
    'whyclaude.t1.body': 'Academic regulations often contain interconnected requirements distributed across many sections, appendices, and related circulars. Large context windows allow evaluating the complete document without losing cross-article coherence.',
    'whyclaude.t2.title': 'Grounded structured outputs',
    'whyclaude.t2.body': 'Administrative workflows need outputs that strictly preserve source references and can be transformed into structured review schemas for reliable auditing.',
    'whyclaude.t3.title': 'Tool-enabled workflows',
    'whyclaude.t3.body': 'Claude can serve as an analytical reasoning layer connecting document retrieval, structured extraction, cross-referencing validation logic, and human review handoff.',
    'whyclaude.arch.title': 'Provider-Agnostic Reasoning Architecture',
    'whyclaude.arch.badge': 'Provider-agnostic architecture · Claude-ready design',
    'whyclaude.arch.n1': 'Institution documents',
    'whyclaude.arch.n2': 'Text extraction & page tracking',
    'whyclaude.arch.n3': 'Provider-agnostic AI reasoning',
    'whyclaude.arch.n4': 'Structured output',
    'whyclaude.arch.n5': 'Server-side verification',
    'whyclaude.arch.n6': 'Human review & decision',
    'whyclaude.note': 'Note: The current live prototype validates the workflow with a live AI backend (Vertex AI / Gemini), while the architecture remains provider-agnostic and ready for future Claude integration and evaluation.',

    // Evaluation Approach
    'evaluation.label': 'Evaluation approach',
    'evaluation.title': 'How we evaluate prototype reliability & grounding.',
    'evaluation.lead': 'Before considering broader deployment, every workflow must undergo rigorous validation across four fundamental dimensions.',
    'evaluation.d1.title': 'Answer correctness',
    'evaluation.d1.body': 'Does the output correctly interpret the source regulation without hallucination or distortion of administrative intent?',
    'evaluation.d2.title': 'Citation accuracy',
    'evaluation.d2.body': 'Do statements point strictly to the authoritative articles, clauses, and appendices, enabling rapid verification by staff?',
    'evaluation.d3.title': 'Extraction consistency',
    'evaluation.d3.body': 'Are extracted fields, tables, and conditions predictable, schema-compliant, and reproducible across varying document versions?',
    'evaluation.d4.title': 'Human review efficiency',
    'evaluation.d4.body': 'Can academic staff verify outputs faster while retaining accountability and complete decision authority?',
    'evaluation.live_milestone': 'The prototype has completed an initial end-to-end live validation using a sample Vietnamese academic regulation, including server-side verification of supporting evidence. Broader evaluation across real institutional documents is the next step.',
    'evaluation.disclaimer': 'Evaluation protocols are designed for collaborative pilot trials. No arbitrary benchmark percentages are claimed.',

    // Product Principles
    'principles.label': 'Product principles',
    'principles.title': 'Responsible AI for higher-education operations.',
    'principles.p1.title': 'Grounded by sources',
    'principles.p1.body': 'Operational answers should point back to the institutional documents they rely on, eliminating untraceable outputs.',
    'principles.p2.title': 'Human-in-the-loop',
    'principles.p2.body': 'AI supports staff decisions; it should not silently replace accountable human review or official discretion.',
    'principles.p3.title': 'Evaluation before scale',
    'principles.p3.body': 'We prioritize testing accuracy, traceability, and workflow impact before expanding deployment.',
    'principles.p4.title': 'Vietnamese context first',
    'principles.p4.body': 'The product is designed around Vietnamese academic terminology, regulations, and administrative practices.',

    // About / Founder
    'about.label': 'About HieuDaoTao',
    'about.title': 'An early-stage EdTech project for higher-education operations.',
    'about.p1': 'HieuDaoTao is being developed from direct exposure to the complexity of higher-education administration, academic documents, admissions workflows, and institutional data in Vietnam.',
    'about.p2': 'Our current priority is validating core document reasoning and source-grounding workflows with higher-education practitioners before developing broader institutional tools.',
    'about.role': 'Founder / Project Lead',
    'about.linkedin': 'Connect on LinkedIn ↗',

    // Pilot CTA
    'contact.label': 'Pilot program',
    'contact.title': 'Help us validate a real higher-education workflow.',
    'contact.body': 'Interested in evaluating AI-assisted academic policy workflows? Explore the live prototype or get in touch to discuss a pilot use case.',
    'contact.cta_prototype': 'Try live prototype ↗',
    'contact.email_btn': 'hello@hieudaotao.io.vn',
    'contact.linkedin_btn': 'Connect on LinkedIn',
    'contact.note': 'Exploratory pilot discussions · Non-production evaluation',

    // Footer
    'footer.tagline': 'Academic Policy Intelligence for Higher Education.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.pilot': 'Pilot program',
    'footer.prototype': 'Working Prototype',
    'footer.note': 'HieuDaoTao is an early-stage EdTech project. Product descriptions on this website refer to prototypes and planned capabilities under validation.'
  },

  vi: {
    // Navigation
    'nav.workflow': 'Quy trình lõi',
    'nav.prototype': 'Bản thử nghiệm',
    'nav.usecases': 'Ứng dụng',
    'nav.whyclaude': 'Vì sao Claude',
    'nav.evaluation': 'Đánh giá',
    'nav.about': 'Giới thiệu',
    'nav.contact': 'Tham gia pilot',

    // Hero
    'hero.eyebrow': 'EdTech giai đoạn sớm · Việt Nam',
    'hero.title': 'Quy trình AI được xây dựng cho sự phức tạp của giáo dục đại học.',
    'hero.lead': 'HieuDaoTao là dự án AI giai đoạn sớm tập trung vào thấu hiểu quy chế học vụ và chuyển đổi văn bản đại học phức tạp thành quy trình có căn cứ nguồn được con người thẩm định.',
    'hero.pipe1': 'Quy chế học vụ',
    'hero.pipe2': 'Suy luận hỗ trợ bằng AI',
    'hero.pipe3': 'Câu trả lời có dẫn nguồn',
    'hero.pipe4': 'Con người thẩm định',
    'hero.cta_prototype': 'Trải nghiệm live prototype ↗',
    'hero.cta_explore': 'Tìm hiểu quy trình',
    'hero.cta2': 'Tham gia chương trình pilot →',
    'hero.trust': 'Đã triển khai prototype · Luôn có con người kiểm soát · Thiết kế cho bối cảnh giáo dục đại học Việt Nam',

    // Browser Mockup
    'mockup.title': 'Không gian làm việc HieuDaoTao',
    'mockup.status': 'Prototype đang hoạt động',
    'mockup.doc_name': 'quy-che-dao-tao-mau.pdf',
    'mockup.doc_meta': '3 trang · Văn bản quy chế tiếng Việt',
    'mockup.processed': 'Đã phân tích',
    'mockup.question': 'Điều kiện xét và công nhận tốt nghiệp đại học là gì?',
    'mockup.ai_chip': 'Câu trả lời hỗ trợ bằng AI',
    'mockup.answer': 'Điều kiện tốt nghiệp được quy định tại Điều 18. Sinh viên được công nhận tốt nghiệp khi điểm trung bình chung tích lũy toàn khóa đạt từ 2.00 trở lên theo thang điểm 4 và đạt chuẩn đầu ra ngoại ngữ.',
    'mockup.src': 'Trang 3 · Điều 18, Khoản 1',
    'mockup.verified_badge': '✓ Đã xác minh với văn bản gốc',
    'mockup.warning': 'Lưu ý thẩm định: Kết quả hỗ trợ bởi AI. Cần đối chiếu văn bản gốc trước khi ra quyết định hành chính.',

    // Problem
    'problem.label': 'Bài toán thực tế',
    'problem.title': 'Quản trị đào tạo vận hành trên quy định chằng chéo, văn bản phân tán và kiểm tra thủ công.',
    'problem.lead': 'Hoạt động đại học không thể dựa vào chatbot thông thường hay các tóm tắt thiếu kiểm chứng. Mọi diễn giải nghiệp vụ đều gắn liền với trách nhiệm tổ chức.',
    'problem.p1.title': 'Quy chế dày & liên kết phức tạp',
    'problem.p1.body': 'Quy chế, thông tư và quy định đào tạo dài hàng trăm trang qua nhiều khóa học, tạo áp lực lớn cho cán bộ khi tra cứu.',
    'problem.p2.title': 'Văn bản quy định phân tán',
    'problem.p2.body': 'Hướng dẫn, đề án tuyển sinh, thông báo thủ tục và các văn bản sửa đổi nằm rải rác ở nhiều phòng ban, bảng tính và thư mục lưu trữ.',
    'problem.p3.title': 'Đối chiếu thủ công tốn thời gian',
    'problem.p3.body': 'Cán bộ mất nhiều giờ đối chiếu điều kiện, trường hợp ngoại lệ và so sánh từng điều khoản trước khi trả lời người học hoặc lập hồ sơ.',
    'problem.p4.title': 'Khó truy vết căn cứ gốc',
    'problem.p4.body': 'Tư vấn không chính thức hay AI thông thường không dẫn chứng được điều khoản pháp lý, tiềm ẩn rủi ro trong quyết định hành chính.',

    // Core Workflow
    'workflow.label': 'Quy trình lõi',
    'workflow.title': 'Từ văn bản học vụ phức tạp đến quyết định được con người thẩm định.',
    'workflow.lead': 'Quy trình có cấu trúc, có thể truy vết được thiết kế xoay quanh bằng chứng xác thực và sự kiểm soát của con người.',
    'workflow.s1.step': 'Bước 01',
    'workflow.s1.title': 'Văn bản cơ sở đào tạo',
    'workflow.s1.body': 'Nạp các văn bản quy chế học vụ, đề án tuyển sinh, thông tư và hướng dẫn thủ tục chính thức ở định dạng PDF dạng văn bản.',
    'workflow.s1.tag1': 'Quy chế học vụ',
    'workflow.s1.tag2': 'Đề án tuyển sinh',
    'workflow.s1.tag3': 'Hướng dẫn thủ tục',
    'workflow.s2.step': 'Bước 02',
    'workflow.s2.title': 'Trích xuất & suy luận văn bản',
    'workflow.s2.body': 'Phân tích văn bản theo từng trang, định dạng ngữ cảnh có cấu trúc và suy luận AI bám sát quy chế qua các điều khoản.',
    'workflow.s2.tag1': 'Theo dõi số trang',
    'workflow.s2.tag2': 'Suy luận quy chế',
    'workflow.s2.tag3': 'Trích xuất cấu trúc',
    'workflow.s3.step': 'Bước 03',
    'workflow.s3.title': 'Kết quả có căn cứ nguồn',
    'workflow.s3.body': 'Tổng hợp câu trả lời có cấu trúc kèm trích dẫn điều khoản cụ thể, số trang chính xác và đoạn trích dẫn chứng.',
    'workflow.s3.tag1': 'Câu trả lời có dẫn nguồn',
    'workflow.s3.tag2': 'Trích dẫn số trang',
    'workflow.s3.tag3': 'Đoạn trích dẫn chứng',
    'workflow.s4.step': 'Bước 04',
    'workflow.s4.title': 'Xác minh máy chủ & thẩm định',
    'workflow.s4.body': 'Xác minh trích dẫn phía máy chủ kiểm tra độc lập đoạn trích với văn bản gốc trước khi cán bộ thẩm định.',
    'workflow.s4.tag1': 'Xác minh đoạn trích',
    'workflow.s4.tag2': 'Con người kiểm soát',

    // Working Prototype
    'prototype.label': 'Nguyên mẫu đang hoạt động',
    'prototype.title': 'Bản thử nghiệm đang hoạt động & kiểm chứng thực tế',
    'prototype.lead': 'HieuDaoTao hiện đã triển khai bản thử nghiệm (prototype) trực tuyến phục vụ phân tích chính sách học vụ. Tải lên quy chế đào tạo dạng PDF, đặt câu hỏi nghiệp vụ và nhận câu trả lời có căn cứ kèm đoạn trích dẫn chứng được xác minh theo trang.',
    'prototype.badge': 'Live prototype · Hoạt động tại prototype.hieudaotao.io.vn',

    // Prototype Capabilities
    'prototype.c1.title': 'Phân tích văn bản quy chế dài',
    'prototype.c1.body': 'Xử lý các tệp PDF quy chế học vụ dạng văn bản với khả năng lưu giữ ranh giới từng trang.',
    'prototype.c2.title': 'Hỏi đáp bám sát văn bản',
    'prototype.c2.body': 'Trả lời các câu hỏi hành chính hoàn toàn dựa trên tài liệu được cung cấp, không suy diễn chung chung.',
    'prototype.c3.title': 'Dẫn chứng điều khoản & số trang',
    'prototype.c3.body': 'Chỉ rõ điều khoản, điểm và số trang cụ thể trong văn bản gốc cho từng nội dung giải đáp.',
    'prototype.c4.title': 'Xác minh đoạn trích phía máy chủ',
    'prototype.c4.body': 'Tự động kiểm tra độc lập xem đoạn trích dẫn có thực sự xuất hiện nguyên văn trên trang nguồn hay không.',
    'prototype.c5.title': 'Con người giữ quyền quyết định',
    'prototype.c5.body': 'Trình bày kết quả trực quan để cán bộ kiểm tra nhanh chóng, đảm bảo con người giữ quyền quyết định cuối cùng.',

    // Workflow Preview Card & CTA
    'prototype.preview_label': 'Xem trước quy trình',
    'prototype.preview_title': 'Quy trình phân tích chính sách học vụ',
    'prototype.preview_doc': 'quy-che-dao-tao-mau.pdf',
    'prototype.preview_doc_meta': 'Quy chế đào tạo mẫu · 3 trang',
    'prototype.preview_q': 'Điều kiện xét và công nhận tốt nghiệp đại học là gì?',
    'prototype.preview_ans': 'Điều kiện tốt nghiệp được quy định tại Điều 18. Sinh viên được công nhận tốt nghiệp khi điểm trung bình chung tích lũy toàn khóa đạt từ 2.00 trở lên theo thang điểm 4 và đạt chuẩn đầu ra ngoại ngữ.',
    'prototype.preview_evidence_tag': 'Trang 3 · Điều 18, Khoản 1',
    'prototype.preview_verified': '✓ Đã xác minh với văn bản gốc',
    'prototype.preview_quote': '“Sinh viên được công nhận tốt nghiệp khi điểm trung bình chung tích lũy toàn khóa đạt từ 2.00 trở lên theo thang điểm 4 và đạt chuẩn đầu ra ngoại ngữ...”',
    'prototype.cta_btn': 'Trải nghiệm prototype trực tiếp ↗',
    'prototype.disclaimer': 'Chỉ sử dụng cho mục đích thử nghiệm prototype. Không tải lên văn bản mật hoặc tài liệu nhạy cảm. Kết quả hỗ trợ bởi AI cần được thẩm định lại với văn bản gốc.',

    // Prototype Limitations
    'prototype.limits.title': 'Giới hạn của bản thử nghiệm',
    'prototype.limits.l1': 'Chỉ hỗ trợ PDF dạng văn bản: Chưa hỗ trợ tài liệu scan dạng hình ảnh cần OCR.',
    'prototype.limits.l2': 'Giới hạn dung lượng: Dung lượng tệp tải lên hiện giới hạn ở mức 4.5 MB theo cấu hình serverless.',
    'prototype.limits.l3': 'Yêu cầu con người thẩm định: Kết quả AI mang tính chất hỗ trợ và luôn cần đối chiếu văn bản gốc.',
    'prototype.limits.l4': 'Giá trị tham khảo: Kết quả từ prototype không cấu thành quyết định hành chính chính thức.',

    // Initial Use Cases
    'usecases.label': 'Ứng dụng ban đầu',
    'usecases.title': 'Tập trung vào các quy trình đòi hỏi ngữ cảnh sâu và khả năng truy vết.',
    'usecases.lead': 'Chúng tôi ưu tiên quy trình tài liệu có độ phức tạp cao trước khi mở rộng sang các nghiệp vụ hành chính lân cận.',
    'usecases.primary.badge': 'Trọng tâm số 1 · Prototype đang hoạt động',
    'usecases.primary.title': 'Trí tuệ chính sách học vụ',
    'usecases.primary.body': 'Hiểu quy chế học vụ và đưa ra câu trả lời có căn cứ nguồn. Phân tích chuyên sâu quy chế đào tạo, quy định điểm số, chuẩn đầu ra và các thay đổi chính sách qua các khóa học kèm trích dẫn điều khoản cụ thể.',
    'usecases.adj1.badge': 'Lân cận · Kiểm chứng quy trình',
    'usecases.adj1.title': 'Phân tích đề án tuyển sinh',
    'usecases.adj1.body': 'Trích xuất điều kiện xét tuyển, so sánh quy định qua các mùa tuyển sinh và hỗ trợ cán bộ tra cứu nhanh có căn cứ.',
    'usecases.adj2.badge': 'Lân cận · Đang nghiên cứu',
    'usecases.adj2.title': 'Trợ lý tri thức nội bộ',
    'usecases.adj2.body': 'Giúp cán bộ tra cứu các quyết định nội bộ, sổ tay quy trình và hướng dẫn nghiệp vụ mà không cần tìm thủ công giữa nhiều văn bản.',
    'usecases.adj3.badge': 'Lân cận · Đang nghiên cứu',
    'usecases.adj3.title': 'Rà soát hồ sơ học vụ',
    'usecases.adj3.body': 'Hỗ trợ con người phát hiện bất nhất, trường dữ liệu thiếu hoặc thông tin mâu thuẫn giữa hồ sơ và quy định trước khi phê duyệt.',

    // Why Claude
    'whyclaude.label': 'Vì sao lựa chọn Claude',
    'whyclaude.title': 'Năng lực công nghệ phù hợp với suy luận học vụ dài và quy trình có thể kiểm chứng.',
    'whyclaude.lead': 'HieuDaoTao được thiết kế với kiến trúc suy luận đa nền tảng (provider-agnostic). Chúng tôi đặc biệt quan tâm đến việc đánh giá Claude cho các quy trình học vụ chuyên sâu — nơi khả năng hiểu văn bản dài, kết quả bám sát nguồn, tích hợp công cụ có cấu trúc và thẩm định tin cậy là tối quan trọng.',
    'whyclaude.t1.title': 'Suy luận trên văn bản dài',
    'whyclaude.t1.body': 'Quy định học vụ có nhiều mối liên hệ chéo giữa các thông tư, quy chế và phụ lục. Ngữ cảnh lớn cho phép phân tích toàn diện văn bản mà không làm mất tính nhất quán giữa các điều.',
    'whyclaude.t2.title': 'Đầu ra có cấu trúc & căn cứ nguồn',
    'whyclaude.t2.body': 'Quy trình hành chính cần cấu trúc JSON chuẩn hóa, đoạn trích dẫn cụ thể và tuân thủ chặt chẽ văn bản nguồn để phục vụ bước thẩm định tiếp theo.',
    'whyclaude.t3.title': 'Quy trình tích hợp công cụ',
    'whyclaude.t3.body': 'Claude đóng vai trò lớp suy luận phân tích, điều phối giữa truy xuất tài liệu, trích xuất cấu trúc dữ liệu, kiểm tra bất thường và bàn giao cho con người thẩm định.',
    'whyclaude.arch.title': 'Kiến trúc suy luận đa nền tảng',
    'whyclaude.arch.badge': 'Kiến trúc đa nền tảng · Sẵn sàng tích hợp Claude',
    'whyclaude.arch.n1': 'Văn bản cơ sở đào tạo',
    'whyclaude.arch.n2': 'Trích xuất văn bản & theo dõi trang',
    'whyclaude.arch.n3': 'Suy luận AI đa nền tảng',
    'whyclaude.arch.n4': 'Dữ liệu có cấu trúc',
    'whyclaude.arch.n5': 'Xác minh phía máy chủ',
    'whyclaude.arch.n6': 'Con người thẩm định & quyết định',
    'whyclaude.note': 'Lưu ý: Prototype hiện tại kiểm chứng quy trình với backend AI đang hoạt động (Vertex AI / Gemini), trong khi kiến trúc hệ thống luôn sẵn sàng tích hợp và đánh giá Claude trong tương lai.',

    // Evaluation Approach
    'evaluation.label': 'Phương pháp đánh giá',
    'evaluation.title': 'Cách chúng tôi đánh giá độ tin cậy & căn cứ nguồn của prototype.',
    'evaluation.lead': 'Trước khi cân nhắc triển khai rộng hơn, mỗi quy trình phải vượt qua các bài kiểm chứng nghiêm ngặt trên 4 tiêu chí cốt lõi.',
    'evaluation.d1.title': 'Tính chính xác của câu trả lời',
    'evaluation.d1.body': 'Câu trả lời có phản ánh và diễn giải đúng quy chế nguồn mà không suy diễn sai lệch ý nghĩa hành chính hay không?',
    'evaluation.d2.title': 'Độ chuẩn xác của trích dẫn',
    'evaluation.d2.body': 'Các khẳng định có trỏ chính xác đến từng điều, khoản và phụ lục cụ thể để cán bộ có thể kiểm tra lại nhanh chóng hay không?',
    'evaluation.d3.title': 'Tính nhất quán khi trích xuất',
    'evaluation.d3.body': 'Các trường thông tin, bảng biểu và điều kiện trích xuất có chuẩn hóa theo schema và nhất quán qua các phiên bản văn bản hay không?',
    'evaluation.d4.title': 'Hiệu quả thẩm định của con người',
    'evaluation.d4.body': 'Quy trình có giúp giảm đáng kể thời gian tra cứu thủ công trong khi vẫn đảm bảo cán bộ giữ trọn vẹn quyền hạn và trách nhiệm quyết định hay không?',
    'evaluation.live_milestone': 'Prototype đã hoàn thành đợt kiểm chứng trực tiếp đầu cuối trên văn bản quy chế đào tạo mẫu tiếng Việt, bao gồm xác minh trích dẫn chứng ở phía máy chủ. Đánh giá mở rộng trên nhiều văn bản thực tế là bước tiếp theo.',
    'evaluation.disclaimer': 'Quy trình đánh giá được thiết kế cho các đợt thử nghiệm phối hợp. Chúng tôi không đưa ra các số liệu benchmark tùy tiện.',

    // Product Principles
    'principles.label': 'Nguyên tắc sản phẩm',
    'principles.title': 'AI có trách nhiệm cho quản trị đại học.',
    'principles.p1.title': 'Luôn dựa trên căn cứ nguồn',
    'principles.p1.body': 'Mọi câu trả lời nghiệp vụ phải dẫn chứng tài liệu chính thức của cơ sở đào tạo, loại bỏ thông tin không thể truy vết.',
    'principles.p2.title': 'Con người luôn kiểm soát',
    'principles.p2.body': 'AI đóng vai trò trợ lý phân tích; tuyệt đối không thay thế trách nhiệm thẩm định và thẩm quyền của con người.',
    'principles.p3.title': 'Đánh giá trước khi mở rộng',
    'principles.p3.body': 'Chúng tôi ưu tiên kiểm chứng độ chính xác, trích dẫn và tác động quy trình với người làm thực tế trước khi mở rộng tính năng.',
    'principles.p4.title': 'Ưu tiên bối cảnh Việt Nam',
    'principles.p4.body': 'Thiết kế bám sát thuật ngữ hành chính, cấu trúc quy phạm pháp luật và thực tiễn quản trị đại học Việt Nam.',

    // About / Founder
    'about.label': 'Về HieuDaoTao',
    'about.title': 'Dự án EdTech giai đoạn sớm vì hiệu quả vận hành giáo dục đại học.',
    'about.p1': 'HieuDaoTao được phát triển từ trải nghiệm thực tế với độ phức tạp của công tác quản trị đại học, văn bản học vụ, quy trình tuyển sinh và dữ liệu đào tạo tại Việt Nam.',
    'about.p2': 'Ưu tiên hiện tại của chúng tôi là kiểm chứng quy trình suy luận văn bản và đối chiếu nguồn cùng các cán bộ chuyên môn trước khi xây dựng các công cụ diện rộng.',
    'about.role': 'Sáng lập / Trưởng dự án',
    'about.linkedin': 'Kết nối trên LinkedIn ↗',

    // Pilot CTA
    'contact.label': 'Chương trình thử nghiệm',
    'contact.title': 'Cùng chúng tôi kiểm chứng một quy trình giáo dục đại học thực tế.',
    'contact.body': 'Quý đơn vị quan tâm đến việc thử nghiệm quy trình phân tích chính sách học vụ hỗ trợ bằng AI? Hãy trải nghiệm prototype trực tiếp hoặc liên hệ với chúng tôi để trao đổi về chương trình pilot.',
    'contact.cta_prototype': 'Trải nghiệm live prototype ↗',
    'contact.email_btn': 'hello@hieudaotao.io.vn',
    'contact.linkedin_btn': 'Kết nối trên LinkedIn',
    'contact.note': 'Trao đổi thử nghiệm thăm dò · Đánh giá phi production',

    // Footer
    'footer.tagline': 'Trí tuệ chính sách học vụ cho giáo dục đại học.',
    'footer.privacy': 'Quyền riêng tư',
    'footer.terms': 'Điều khoản',
    'footer.pilot': 'Chương trình Pilot',
    'footer.prototype': 'Bản thử nghiệm',
    'footer.note': 'HieuDaoTao là dự án EdTech giai đoạn sớm. Các mô tả sản phẩm trên website đề cập đến prototype và năng lực dự kiến đang trong quá trình kiểm chứng.'
  }
};

// Language Handling
let currentLang = localStorage.getItem('hdt-lang') || 'en';
const switcher = document.getElementById('langSwitch');

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  if (switcher) {
    switcher.textContent = lang === 'en' ? 'VI' : 'EN';
    switcher.setAttribute('aria-label', lang === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh');
  }
  localStorage.setItem('hdt-lang', lang);
}

if (switcher) {
  switcher.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'vi' : 'en');
  });
}
applyLanguage(currentLang);

// Sticky Header
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Mobile Navigation Toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Intersection Observer for Reveal Animation
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
