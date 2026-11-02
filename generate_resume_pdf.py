import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT

def generate_pdf():
    pdf_path = os.path.join(os.getcwd(), "public", "resume.pdf")
    
    # Clean margins for single page layout
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=26,
        bottomMargin=26,
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Palette
    primary_color = colors.HexColor("#0F172A")    # Deep slate
    secondary_color = colors.HexColor("#0284C7")  # Cyan / sky blue
    dark_gray = colors.HexColor("#334155")
    charcoal = colors.HexColor("#1E293B")
    rule_color = colors.HexColor("#CBD5E1")
    
    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        alignment=TA_CENTER,
        textColor=primary_color,
    )
    
    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        alignment=TA_CENTER,
        textColor=secondary_color,
    )
    
    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.2,
        alignment=TA_CENTER,
        textColor=dark_gray,
    )
    
    section_head_style = ParagraphStyle(
        'ResumeSecHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=11.8,
        textColor=primary_color,
        spaceAfter=1,
    )
    
    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11,
        textColor=charcoal,
        alignment=TA_LEFT,
    )
    
    bold_lead_style = ParagraphStyle(
        'ResumeBoldLead',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.4,
        leading=11.2,
        textColor=charcoal,
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.1,
        leading=10.6,
        textColor=charcoal,
        leftIndent=11,
        firstLineIndent=-7,
    )
    
    story = []
    
    # Header
    story.append(Paragraph("<b>SIDDHARTH HM</b>", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Full Stack Software Engineer (Fresher) | React.js | Node.js | REST APIs | AI & LLM Projects", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "Bangalore, Karnataka, India &nbsp;|&nbsp; +91 9019983348 &nbsp;|&nbsp; "
        "<a href='mailto:siddharth.hm2@gmail.com' color='#0284C7'>siddharth.hm2@gmail.com</a> &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/siddharthhm-dev' color='#0284C7'>linkedin.com/in/siddharthhm-dev</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/siddharth842147' color='#0284C7'>github.com/siddharth842147</a>",
        contact_style
    ))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1, color=rule_color, spaceBefore=0, spaceAfter=4))
    
    # Professional Summary
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_head_style))
    story.append(Paragraph(
        "Final-year B.E. Information Science Engineering student (CGPA 8.1/10) with hands-on experience building full-stack "
        "web applications using React.js, Node.js, Express.js and REST APIs. Delivered paid freelance projects end to end, "
        "built authentication, payment and notification features, and worked on AI-powered applications during an AI/ML internship. "
        "Strong in JavaScript, Python and SQL, with solid fundamentals and a drive to learn. Seeking a Fresher Full Stack Software Engineer role.",
        body_style
    ))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=3))
    
    # Technical Skills
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_head_style))
    skills_data = [
        ("Front End:", "React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design"),
        ("Back End:", "Node.js, Express.js, RESTful API design, JWT Authentication, Bcrypt, Mongoose, Nodemailer"),
        ("Databases:", "SQL, MySQL, MongoDB, Supabase"),
        ("Languages:", "JavaScript, Python, Java, C++, SQL"),
        ("Tools:", "Git, GitHub, Postman, VS Code, MySQL Workbench"),
        ("AI-Assisted Development:", "Claude, Cursor, Codex, Amazon Q Developer (Kiro)")
    ]
    for category, details in skills_data:
        story.append(Paragraph(f"<b>{category}</b> {details}", body_style))
    
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=3))
    
    # Experience (Comes before Projects)
    story.append(Paragraph("<b>EXPERIENCE</b>", section_head_style))
    
    # Exp 1
    story.append(Paragraph("<b>Freelance Full-Stack Developer</b> | <i>Project-based</i>", bold_lead_style))
    story.append(Paragraph("• Built and delivered multiple full-stack web applications on a paid basis, handling requirements, implementation, testing and final delivery.", bullet_style))
    story.append(Paragraph("• Developed REST APIs with Node.js and Express.js, designed databases, and built responsive React.js interfaces.", bullet_style))
    story.append(Paragraph("• Used AI-assisted development tools to speed up coding and debugging while maintaining code quality.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Exp 2
    story.append(Paragraph("<b>AI/ML Intern</b> | <i>Pinnacle Labs (Remote)</i> &nbsp;|&nbsp; <i>Aug 2025 – Sep 2025</i>", bold_lead_style))
    story.append(Paragraph("• Built an AI-powered language translator web application using Python, Streamlit and the Deep Translator API.", bullet_style))
    story.append(Paragraph("• Enabled real-time translation across 100+ languages with a minimal-input, responsive interface.", bullet_style))
    story.append(Paragraph("• Managed source code with Git and GitHub.", bullet_style))
    
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=3))
    
    # Projects
    story.append(Paragraph("<b>PROJECTS</b>", section_head_style))
    
    # Project 1
    story.append(Paragraph(
        "<b><a href='https://digital-library-31g52wi9s-siddharth842147s-projects.vercel.app/' color='#0F172A'>Digital Library Management System</a></b> | "
        "<i>React.js, Node.js, Express.js, MongoDB</i> &nbsp;|&nbsp; "
        "<a href='https://digital-library-31g52wi9s-siddharth842147s-projects.vercel.app/' color='#0284C7'>Live Demo on Vercel</a>",
        bold_lead_style
    ))
    story.append(Paragraph("• Contributed to a full-stack college library platform covering book inventory, borrowing, returns and QR-based student identification.", bullet_style))
    story.append(Paragraph("• Built secure authentication with JWT and Bcrypt, and integrated Razorpay and Stripe for online fine payments.", bullet_style))
    story.append(Paragraph("• Developed REST APIs and reusable React components; automated email notifications with Nodemailer and generated fine receipts with PDFKit.", bullet_style))
    story.append(Paragraph("• Integrated the Google Books API for ISBN-based book lookup.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 2
    story.append(Paragraph(
        "<b><a href='https://kartiva.netlify.app/shop' color='#0F172A'>Kartiva – E-Commerce Website</a></b> | "
        "<i>Next.js, TypeScript, Supabase, Tailwind CSS</i> &nbsp;|&nbsp; "
        "<a href='https://kartiva.netlify.app/shop' color='#0284C7'>Live: kartiva.netlify.app/shop</a>",
        bold_lead_style
    ))
    story.append(Paragraph("• Built a full-stack e-commerce storefront with product listings across five categories, using Next.js, TypeScript and Supabase.", bullet_style))
    story.append(Paragraph("• Created a responsive UI with Tailwind CSS and shadcn/ui components.", bullet_style))
    story.append(Paragraph("• Used AI-assisted development tools (Kiro, Antigravity) to build and polish the application.", bullet_style))
    story.append(Spacer(1, 2))
    
    # Project 3
    story.append(Paragraph(
        "<b><a href='https://ai-translato.netlify.app/' color='#0F172A'>AI Translator Web App</a></b> | "
        "<i>Python, Streamlit, Deep Translator API</i> &nbsp;|&nbsp; "
        "<a href='https://ai-translato.netlify.app/' color='#0284C7'>Live: ai-translato.netlify.app</a>",
        bold_lead_style
    ))
    story.append(Paragraph("• Built a responsive web app that translates text across 100+ languages in real time.", bullet_style))
    story.append(Paragraph("• Used Git and GitHub for version control and documented the project for easy setup.", bullet_style))
    
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=0, spaceAfter=3))
    
    # Education
    story.append(Paragraph("<b>EDUCATION</b>", section_head_style))
    story.append(Paragraph(
        "<b>Jnana Vikas Institute of Technology</b> – B.E. in Information Science Engineering | 2023 – 2027 | CGPA: 8.1/10<br/>"
        "Coursework: Object-Oriented Programming, Database Management Systems, Data Structures",
        body_style
    ))
    story.append(Spacer(1, 2))
    story.append(Paragraph(
        "<b>Sri Vasavi PU College</b> – 12th Standard (PCMC), 87.5% | March 2023",
        body_style
    ))
    
    # Build doc
    doc.build(story)
    print(f"Generated PDF successfully at: {pdf_path}")

if __name__ == "__main__":
    generate_pdf()
