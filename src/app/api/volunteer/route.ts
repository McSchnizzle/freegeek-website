import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interests, about, website } = body;

    // Honeypot spam check - if website field is filled, it's likely a bot
    if (website) {
      // Return success to not reveal spam detection
      return NextResponse.json(
        { success: true, message: 'Interest form submitted successfully' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with volunteer management system or CRM
    console.log('Volunteer interest form:', { name, email, phone, interests, about });

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: 'Interest form submitted successfully' },
      { status: 200 }
    );
  } catch {
    console.error('Volunteer form error');
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
