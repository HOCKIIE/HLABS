import puppeteer from 'puppeteer';

export async function GET() {

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // กัน error บนบางเครื่อง
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/en/cv', {
        waitUntil: 'networkidle0',
    });

    const pdf = await page.pdf({
        scale: 0.75,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true
    });

    await browser.close();

    return new Response(Buffer.from(pdf), {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename=RESUME - Suphawat Kongson.pdf',
        },
    });
}