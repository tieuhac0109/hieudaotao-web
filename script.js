const translations = {
  en: {
    // Navigation
    'nav.workflow': 'Core workflow',
    'nav.prototype': 'Current prototype',
    'nav.usecases': 'Use cases',
    'nav.whyclaude': 'Why Claude',
    'nav.evaluation': 'Evaluation',
    'nav.about': 'About',
    'nav.contact': 'Pilot with us',

    // Hero
    'hero.eyebrow': 'Early-stage EdTech · Vietnam',
    'hero.title': 'AI workflows built for the complexity of higher education.',
    'hero.lead': 'HieuDaoTao is an early-stage AI platform focused on understanding academic regulations and turning complex higher-education documents into source-grounded workflows.',
    'hero.pipe1': 'Academic regulations',
    'hero.pipe2': 'AI-assisted reasoning',
    'hero.pipe3': 'Cited answers',
    'hero.pipe4': 'Human verification',
    'hero.cta1': 'Explore the prototype',
    'hero.cta2': 'Join our pilot program →',
    'hero.trust': 'Prototype stage · Human-in-the-loop by design · Built for Vietnamese higher education contexts',

    // Browser Mockup
    'mockup.title': 'HieuDaoTao Workspace',
    'mockup.status': 'Prototype',
    'mockup.doc_name': '2026_admission_regulation.pdf',
    'mockup.doc_meta': '128 pages · Vietnamese',
    'mockup.processed': 'Analyzed',
    'mockup.question': 'Which sections define eligibility requirements for early admission?',
    'mockup.ai_chip': 'AI-assisted answer',
    'mockup.answer': 'The regulation defines eligibility across three sections. The most relevant provisions are found in Articles 7, 11, and Appendix II.',
    'mockup.src1': 'Art. 7',
    'mockup.src2': 'Art. 11',
    'mockup.src3': 'Appendix II',
    'mockup.warning': 'Human verification recommended before operational use.',

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
    'workflow.s1.body': 'Ingest official academic regulations, admission policies, circulars, and operational guidelines in Vietnamese.',
    'workflow.s1.tag1': 'Academic regulations',
    'workflow.s1.tag2': 'Admission policies',
    'workflow.s1.tag3': 'Procedural guidelines',
    'workflow.s2.step': 'Step 02',
    'workflow.s2.title': 'Document understanding',
    'workflow.s2.body': 'Long-context reasoning, semantic provision retrieval, and structured information extraction across interconnected clauses.',
    'workflow.s2.tag1': 'Retrieval',
    'workflow.s2.tag2': 'Long-context reasoning',
    'workflow.s2.tag3': 'Structured extraction',
    'workflow.s3.step': 'Step 03',
    'workflow.s3.title': 'Grounded output',
    'workflow.s3.body': 'Synthesize cited answers, structured review fields, and specific provisions for audit-ready inspection.',
    'workflow.s3.tag1': 'Cited answers',
    'workflow.s3.tag2': 'Structured fields',
    'workflow.s3.tag3': 'Identified provisions',
    'workflow.s4.step': 'Step 04',
    'workflow.s4.title': 'Human verification',
    'workflow.s4.body': 'Operational decisions remain subject to accountable human review. AI supports staff rather than replacing oversight.',
    'workflow.s4.tag1': 'Accountable oversight',
    'workflow.s4.tag2': 'Operational discretion',

    // Current Prototype
    'prototype.label': 'What exists today',
    'prototype.title': 'Current prototype & workflow validation',
    'prototype.lead': 'We are actively developing and validating core document reasoning workflows on real Vietnamese academic texts.',
    'prototype.badge': 'Current stage: prototype development and workflow validation',
    'prototype.c1.title': 'Loading long documents',
    'prototype.c1.body': 'Processing multi-hundred-page regulations, circulars, and institutional policy frameworks in Vietnamese.',
    'prototype.c2.title': 'Asking document questions',
    'prototype.c2.body': 'Querying specific academic procedures, eligibility clauses, and administrative conditions.',
    'prototype.c3.title': 'Retrieving relevant provisions',
    'prototype.c3.body': 'Pinpointing relevant articles, clauses, and appendices across interconnected institutional files.',
    'prototype.c4.title': 'Source-grounded answers',
    'prototype.c4.body': 'Producing structured responses with inline citations back to original document text.',
    'prototype.c5.title': 'Structured extraction',
    'prototype.c5.body': 'Turning unstructured requirements into reviewable tables, schemas, and checklist items.',
    'prototype.c6.title': 'Human review handoff',
    'prototype.c6.body': 'Preparing outputs for rapid inspection, verification, and final decision by staff.',
    'prototype.demo.disclaimer': 'Interactive product concept using sample content — not a production system.',
    'prototype.demo.doc_label': 'Sample Document',
    'prototype.demo.doc_title': 'University Admission Regulation 2026',
    'prototype.demo.doc_meta': '128 pages · Vietnamese higher education',
    'prototype.demo.query_label': 'Staff Query',
    'prototype.demo.query_text': 'Which provisions define early-admission eligibility requirements?',
    'prototype.demo.run_btn': 'Run sample workflow',
    'prototype.demo.reset_btn': 'Reset workflow',
    'prototype.demo.stepper_title': 'Workflow Pipeline Simulation',
    'prototype.demo.step1': 'Document loaded',
    'prototype.demo.step2': 'Retrieving provisions',
    'prototype.demo.step3': 'Reasoning',
    'prototype.demo.step4': 'Grounding answer',
    'prototype.demo.step5': 'Ready for human review',
    'prototype.demo.ans_title': 'Grounded Output Summary',
    'prototype.demo.ans_p1': 'Early admission eligibility is defined across three key provisions: Article 7 (General criteria for high school academic records), Article 11 (Specific threshold criteria and program-specific conditions), and Appendix II (Conversion table for accredited language certificates).',
    'prototype.demo.ans_src_label': 'Identified provisions:',
    'prototype.demo.ans_src1': 'Art. 7 (Criteria)',
    'prototype.demo.ans_src2': 'Art. 11 (Thresholds)',
    'prototype.demo.ans_src3': 'Appendix II (Certificates)',
    'prototype.demo.review_notice': 'Operational verification required: Staff must confirm the applicant certificate validity period against Circular 08/2022 before applying results.',

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
    'whyclaude.lead': 'We are prototyping with Claude because higher-education administration requires deep contextual understanding, nuanced language comprehension, and verifiable outputs.',
    'whyclaude.t1.title': 'Long-document reasoning',
    'whyclaude.t1.body': 'Academic regulations often contain interconnected requirements distributed across many sections, appendices, and related circulars. Large context windows allow evaluating the complete document without losing cross-article coherence.',
    'whyclaude.t2.title': 'Grounded structured outputs',
    'whyclaude.t2.body': 'Administrative workflows need outputs that strictly preserve source references and can be transformed into structured review schemas for reliable auditing.',
    'whyclaude.t3.title': 'Tool-enabled workflows',
    'whyclaude.t3.body': 'Claude can serve as an analytical reasoning layer connecting document retrieval, structured extraction, cross-referencing validation logic, and human review handoff.',
    'whyclaude.arch.title': 'Concept Architecture',
    'whyclaude.arch.badge': 'Concept architecture — not a production deployment',
    'whyclaude.arch.n1': 'Institution documents',
    'whyclaude.arch.n2': 'Secure ingestion / retrieval',
    'whyclaude.arch.n3': 'Claude reasoning layer',
    'whyclaude.arch.n4': 'Structured output',
    'whyclaude.arch.n5': 'Validation logic',
    'whyclaude.arch.n6': 'Human review & decision',

    // Evaluation Approach
    'evaluation.label': 'Evaluation approach',
    'evaluation.title': 'How we plan to evaluate prototype reliability.',
    'evaluation.lead': 'Before considering broader deployment, every workflow must undergo rigorous validation across four fundamental dimensions.',
    'evaluation.d1.title': 'Answer correctness',
    'evaluation.d1.body': 'Does the output correctly interpret the source regulation without hallucination or distortion of administrative intent?',
    'evaluation.d2.title': 'Citation accuracy',
    'evaluation.d2.body': 'Do statements point strictly to the authoritative articles, clauses, and appendices, enabling rapid verification by staff?',
    'evaluation.d3.title': 'Extraction consistency',
    'evaluation.d3.body': 'Are extracted fields, tables, and conditions predictable, schema-compliant, and reproducible across varying document versions?',
    'evaluation.d4.title': 'Human review efficiency',
    'evaluation.d4.body': 'Can academic staff verify outputs faster while retaining accountability and complete decision authority?',
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
    'contact.body': 'HieuDaoTao is looking for early conversations with higher-education teams interested in evaluating document analysis, policy-grounded Q&A, and administrative workflow support.',
    'contact.email_btn': 'hello@hieudaotao.io.vn',
    'contact.linkedin_btn': 'Connect on LinkedIn',
    'contact.note': 'Exploratory pilot discussions · Non-production evaluation',

    // Footer
    'footer.tagline': 'Academic Policy Intelligence for Higher Education.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.pilot': 'Pilot program',
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
    'hero.lead': 'HieuDaoTao là nền tảng AI giai đoạn sớm tập trung vào thấu hiểu quy chế học vụ và chuyển đổi văn bản đại học phức tạp thành quy trình có căn cứ nguồn.',
    'hero.pipe1': 'Quy chế học vụ',
    'hero.pipe2': 'Suy luận hỗ trợ bằng AI',
    'hero.pipe3': 'Câu trả lời có dẫn nguồn',
    'hero.pipe4': 'Con người thẩm định',
    'hero.cta1': 'Trải nghiệm prototype',
    'hero.cta2': 'Tham gia chương trình pilot →',
    'hero.trust': 'Giai đoạn prototype · Luôn có con người kiểm soát · Thiết kế cho bối cảnh giáo dục đại học Việt Nam',

    // Browser Mockup
    'mockup.title': 'Không gian làm việc HieuDaoTao',
    'mockup.status': 'Bản thử nghiệm',
    'mockup.doc_name': '2026_quy_che_tuyen_sinh.pdf',
    'mockup.doc_meta': '128 trang · Tiếng Việt',
    'mockup.processed': 'Đã phân tích',
    'mockup.question': 'Điều khoản nào quy định điều kiện xét tuyển sớm?',
    'mockup.ai_chip': 'Câu trả lời hỗ trợ bằng AI',
    'mockup.answer': 'Quy chế quy định điều kiện xét tuyển qua ba phần chính. Các căn cứ liên quan trực tiếp nhất nằm tại Điều 7, Điều 11 và Phụ lục II.',
    'mockup.src1': 'Điều 7',
    'mockup.src2': 'Điều 11',
    'mockup.src3': 'Phụ lục II',
    'mockup.warning': 'Cần con người thẩm định trước khi áp dụng vào nghiệp vụ thực tế.',

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
    'workflow.s1.body': 'Nạp các văn bản quy chế học vụ, đề án tuyển sinh, thông tư và hướng dẫn thủ tục chính thức bằng tiếng Việt.',
    'workflow.s1.tag1': 'Quy chế học vụ',
    'workflow.s1.tag2': 'Đề án tuyển sinh',
    'workflow.s1.tag3': 'Hướng dẫn thủ tục',
    'workflow.s2.step': 'Bước 02',
    'workflow.s2.title': 'Thấu hiểu văn bản',
    'workflow.s2.body': 'Suy luận ngữ cảnh dài, truy xuất điều khoản ngữ nghĩa và trích xuất thông tin có cấu trúc qua các điều khoản đan xen.',
    'workflow.s2.tag1': 'Truy xuất điều khoản',
    'workflow.s2.tag2': 'Suy luận ngữ cảnh dài',
    'workflow.s2.tag3': 'Trích xuất cấu trúc',
    'workflow.s3.step': 'Bước 03',
    'workflow.s3.title': 'Kết quả có căn cứ nguồn',
    'workflow.s3.body': 'Tổng hợp câu trả lời có dẫn chứng, trường thẩm định có cấu trúc và điều khoản cụ thể sẵn sàng cho kiểm tra.',
    'workflow.s3.tag1': 'Câu trả lời có dẫn nguồn',
    'workflow.s3.tag2': 'Trường dữ liệu chuẩn',
    'workflow.s3.tag3': 'Điều khoản đối chiếu',
    'workflow.s4.step': 'Bước 04',
    'workflow.s4.title': 'Thẩm định bởi con người',
    'workflow.s4.body': 'Quyết định hành chính luôn thuộc trách nhiệm thẩm định của con người. AI hỗ trợ cán bộ chứ không thay thế quyền quyết định.',
    'workflow.s4.tag1': 'Trách nhiệm giải trình',
    'workflow.s4.tag2': 'Thẩm quyền nghiệp vụ',

    // Current Prototype
    'prototype.label': 'Hiện trạng phát triển',
    'prototype.title': 'Bản thử nghiệm hiện tại & kiểm chứng quy trình',
    'prototype.lead': 'Chúng tôi đang tích cực phát triển và kiểm chứng quy trình suy luận tài liệu trên các văn bản học vụ Việt Nam thực tế.',
    'prototype.badge': 'Giai đoạn: Phát triển prototype & kiểm chứng quy trình',
    'prototype.c1.title': 'Xử lý tài liệu dài',
    'prototype.c1.body': 'Nạp các văn bản quy chế, thông tư và khung chính sách nhiều trăm trang bằng tiếng Việt.',
    'prototype.c2.title': 'Hỏi đáp theo ngữ cảnh',
    'prototype.c2.body': 'Tra cứu thủ tục đào tạo, tiêu chuẩn xét tuyển và các điều kiện hành chính cụ thể.',
    'prototype.c3.title': 'Truy xuất điều khoản liên quan',
    'prototype.c3.body': 'Xác định chính xác điều khoản, điểm và phụ lục liên quan giữa các văn bản có mối liên hệ chéo.',
    'prototype.c4.title': 'Câu trả lời có dẫn nguồn',
    'prototype.c4.body': 'Trình bày câu trả lời có cấu trúc kèm trích dẫn đối chiếu trực tiếp về văn bản gốc.',
    'prototype.c5.title': 'Trích xuất có cấu trúc',
    'prototype.c5.body': 'Chuyển đổi điều kiện văn bản thành biểu bảng, schema và danh mục kiểm tra phục vụ đối soát.',
    'prototype.c6.title': 'Bàn giao thẩm định',
    'prototype.c6.body': 'Định dạng kết quả để cán bộ rà soát nhanh chóng, xác nhận và ra quyết định cuối cùng.',
    'prototype.demo.disclaimer': 'Khái niệm sản phẩm tương tác dùng dữ liệu mẫu — không phải hệ thống production.',
    'prototype.demo.doc_label': 'Tài liệu mẫu',
    'prototype.demo.doc_title': 'Quy chế tuyển sinh đại học 2026',
    'prototype.demo.doc_meta': '128 trang · Giáo dục đại học Việt Nam',
    'prototype.demo.query_label': 'Câu hỏi nghiệp vụ',
    'prototype.demo.query_text': 'Điều khoản nào quy định điều kiện xét tuyển sớm?',
    'prototype.demo.run_btn': 'Chạy quy trình mẫu',
    'prototype.demo.reset_btn': 'Chạy lại mẫu',
    'prototype.demo.stepper_title': 'Mô phỏng tiến trình quy trình',
    'prototype.demo.step1': 'Đã nạp tài liệu',
    'prototype.demo.step2': 'Đang truy xuất điều khoản',
    'prototype.demo.step3': 'Đang suy luận ngữ cảnh',
    'prototype.demo.step4': 'Đang đối chiếu căn cứ nguồn',
    'prototype.demo.step5': 'Sẵn sàng cho con người thẩm định',
    'prototype.demo.ans_title': 'Tóm tắt kết quả có căn cứ nguồn',
    'prototype.demo.ans_p1': 'Điều kiện xét tuyển sớm được quy định tại 3 nội dung trọng tâm: Điều 7 (Tiêu chuẩn chung về học bạ THPT), Điều 11 (Ngưỡng điểm xét tuyển và điều kiện theo ngành) và Phụ lục II (Bảng quy đổi chứng chỉ ngoại ngữ quốc tế).',
    'prototype.demo.ans_src_label': 'Căn cứ đã xác định:',
    'prototype.demo.ans_src1': 'Điều 7 (Tiêu chuẩn)',
    'prototype.demo.ans_src2': 'Điều 11 (Ngưỡng điểm)',
    'prototype.demo.ans_src3': 'Phụ lục II (Chứng chỉ)',
    'prototype.demo.review_notice': 'Yêu cầu kiểm tra nghiệp vụ: Cán bộ cần đối chiếu thời hạn chứng chỉ của thí sinh theo Thông tư 08/2022 trước khi xác nhận kết quả.',

    // Initial Use Cases
    'usecases.label': 'Ứng dụng ban đầu',
    'usecases.title': 'Tập trung vào các quy trình đòi hỏi ngữ cảnh sâu và khả năng truy vết.',
    'usecases.lead': 'Chúng tôi ưu tiên quy trình tài liệu có độ phức tạp cao trước khi mở rộng sang các nghiệp vụ hành chính lân cận.',
    'usecases.primary.badge': 'Trọng tâm số 1 · Đang phát triển prototype',
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
    'whyclaude.lead': 'Chúng tôi thử nghiệm với Claude vì công tác quản trị đại học đòi hỏi khả năng hiểu ngữ cảnh sâu, xử lý ngôn ngữ tinh tế và đầu ra có thể kiểm chứng.',
    'whyclaude.t1.title': 'Suy luận trên văn bản dài',
    'whyclaude.t1.body': 'Quy định học vụ có nhiều mối liên hệ chéo giữa các thông tư, quy chế và phụ lục. Ngữ cảnh lớn cho phép phân tích toàn diện văn bản mà không làm mất tính nhất quán giữa các điều.',
    'whyclaude.t2.title': 'Đầu ra có cấu trúc & căn cứ nguồn',
    'whyclaude.t2.body': 'Quy trình hành chính cần cấu trúc JSON chuẩn hóa, đoạn trích dẫn cụ thể và tuân thủ chặt chẽ văn bản nguồn để phục vụ bước thẩm định tiếp theo.',
    'whyclaude.t3.title': 'Quy trình tích hợp công cụ',
    'whyclaude.t3.body': 'Claude đóng vai trò lớp suy luận phân tích, điều phối giữa truy xuất tài liệu, trích xuất cấu trúc dữ liệu, kiểm tra bất thường và bàn giao cho con người thẩm định.',
    'whyclaude.arch.title': 'Kiến trúc khái niệm',
    'whyclaude.arch.badge': 'Kiến trúc khái niệm — không phải triển khai production',
    'whyclaude.arch.n1': 'Văn bản cơ sở đào tạo',
    'whyclaude.arch.n2': 'Nạp & truy xuất bảo mật',
    'whyclaude.arch.n3': 'Lớp suy luận Claude',
    'whyclaude.arch.n4': 'Dữ liệu có cấu trúc',
    'whyclaude.arch.n5': 'Quy tắc kiểm tra',
    'whyclaude.arch.n6': 'Con người thẩm định & ra quyết định',

    // Evaluation Approach
    'evaluation.label': 'Phương pháp đánh giá',
    'evaluation.title': 'Cách chúng tôi dự kiến đánh giá độ tin cậy của prototype.',
    'evaluation.lead': 'Trước khi cân nhắc triển khai rộng hơn, mỗi quy trình phải vượt qua các bài kiểm chứng nghiêm ngặt trên 4 tiêu chí cốt lõi.',
    'evaluation.d1.title': 'Tính chính xác của câu trả lời',
    'evaluation.d1.body': 'Câu trả lời có phản ánh và diễn giải đúng quy chế nguồn mà không suy diễn sai lệch ý nghĩa hành chính hay không?',
    'evaluation.d2.title': 'Độ chuẩn xác của trích dẫn',
    'evaluation.d2.body': 'Các khẳng định có trỏ chính xác đến từng điều, khoản và phụ lục cụ thể để cán bộ có thể kiểm tra lại nhanh chóng hay không?',
    'evaluation.d3.title': 'Tính nhất quán khi trích xuất',
    'evaluation.d3.body': 'Các trường thông tin, bảng biểu và điều kiện trích xuất có chuẩn hóa theo schema và nhất quán qua các phiên bản văn bản hay không?',
    'evaluation.d4.title': 'Hiệu quả thẩm định của con người',
    'evaluation.d4.body': 'Quy trình có giúp giảm đáng kể thời gian tra cứu thủ công trong khi vẫn đảm bảo cán bộ giữ trọn vẹn quyền hạn và trách nhiệm quyết định hay không?',
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
    'contact.body': 'HieuDaoTao mong muốn trao đổi sớm với các đơn vị giáo dục đại học quan tâm đến việc thử nghiệm phân tích tài liệu, hỏi đáp có căn cứ quy chế và hỗ trợ quy trình hành chính.',
    'contact.email_btn': 'hello@hieudaotao.io.vn',
    'contact.linkedin_btn': 'Kết nối trên LinkedIn',
    'contact.note': 'Trao đổi thử nghiệm thăm dò · Đánh giá phi production',

    // Footer
    'footer.tagline': 'Trí tuệ chính sách học vụ cho giáo dục đại học.',
    'footer.privacy': 'Quyền riêng tư',
    'footer.terms': 'Điều khoản',
    'footer.pilot': 'Chương trình Pilot',
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

// Interactive Prototype Concept Simulation (Client-side sample demonstration only)
const runBtn = document.getElementById('runPrototypeBtn');
const resetBtn = document.getElementById('resetPrototypeBtn');
const stepEls = [
  document.getElementById('pStep1'),
  document.getElementById('pStep2'),
  document.getElementById('pStep3'),
  document.getElementById('pStep4'),
  document.getElementById('pStep5')
];
const demoOutput = document.getElementById('demoOutput');

let isRunning = false;
let stepTimer = null;

function resetSimulation() {
  if (stepTimer) clearTimeout(stepTimer);
  isRunning = false;
  stepEls.forEach((el, idx) => {
    if (el) {
      el.classList.remove('active', 'completed');
      const dot = el.querySelector('.step-dot');
      if (dot) dot.textContent = String(idx + 1);
    }
  });
  if (demoOutput) demoOutput.classList.remove('visible');
  if (runBtn) {
    runBtn.disabled = false;
    runBtn.style.opacity = '1';
  }
  if (resetBtn) resetBtn.style.display = 'none';
}

function runSimulation() {
  if (isRunning) return;
  isRunning = true;
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.style.opacity = '0.6';
  }
  if (resetBtn) resetBtn.style.display = 'none';
  if (demoOutput) demoOutput.classList.remove('visible');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stepDelay = prefersReducedMotion ? 60 : 450;

  let currentStepIdx = 0;

  function advanceStep() {
    if (currentStepIdx < stepEls.length) {
      // Mark previous step as completed
      if (currentStepIdx > 0) {
        const prevEl = stepEls[currentStepIdx - 1];
        if (prevEl) {
          prevEl.classList.remove('active');
          prevEl.classList.add('completed');
          const dot = prevEl.querySelector('.step-dot');
          if (dot) dot.textContent = '✓';
        }
      }

      // Activate current step
      const currentEl = stepEls[currentStepIdx];
      if (currentEl) {
        currentEl.classList.add('active');
      }

      currentStepIdx++;
      stepTimer = setTimeout(advanceStep, stepDelay);
    } else {
      // All steps finished
      const lastEl = stepEls[stepEls.length - 1];
      if (lastEl) {
        lastEl.classList.remove('active');
        lastEl.classList.add('completed');
        const dot = lastEl.querySelector('.step-dot');
        if (dot) dot.textContent = '✓';
      }

      // Reveal output card
      if (demoOutput) demoOutput.classList.add('visible');
      if (resetBtn) resetBtn.style.display = 'inline-flex';
      isRunning = false;
    }
  }

  advanceStep();
}

if (runBtn) runBtn.addEventListener('click', runSimulation);
if (resetBtn) resetBtn.addEventListener('click', resetSimulation);
