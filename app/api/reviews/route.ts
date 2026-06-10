import { NextResponse, NextRequest } from 'next/server';
import { ObjectId } from 'mongodb';

import clientPromise from '@/lib/mongodb';

const colors = [
  { color: "text-[#10b981]", bg: "bg-[#10b981]/10" },
  { color: "text-[#00f2ff]", bg: "bg-[#00f2ff]/10" },
  { color: "text-[#39ff14]", bg: "bg-[#39ff14]/10" }
];

const initialTestimonials = [
  {
    name: "Elena Volkov",
    role: "CTO, DATAFLOW INC",
    comment: "Musab is a true full-stack expert who understands both frontend UX and backend architecture. He delivered our complex SaaS platform with impeccable quality and scalability.",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director, ARTECH",
    comment: "The level of detail Musab puts into motion and UI is staggering. He doesn't just build components; he engineers digital experiences that truly wow the users.",
    color: "text-[#00f2ff]",
    bg: "bg-[#00f2ff]/10",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Sofia Rodriguez",
    role: "Founder, BLOOM E-COMMERCE",
    comment: "From database schemas to pixel-perfect layouts, Musab handled everything. Our site's performance increased by 80% after his optimization. A brilliant architect.",
    color: "text-[#39ff14]",
    bg: "bg-[#39ff14]/10",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  }
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const reviews = await db.collection('reviews').find({}).sort({ createdAt: -1 }).toArray();

    if (reviews.length === 0) {
      // Seed with initial testimonials if collection is empty
      const seededReviews = initialTestimonials.map((review, index) => ({
        ...review,
        createdAt: new Date(Date.now() - index * 60000) // distinct timestamps
      }));
      await db.collection('reviews').insertMany(seededReviews);
      return NextResponse.json(seededReviews);
    }

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews from MongoDB:', error);
    return NextResponse.json(initialTestimonials);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, role, comment, image } = body;
    
    if (!name || !comment) {
      return NextResponse.json({ error: 'Name and comment are required' }, { status: 400 });
    }

    const randomTheme = colors[Math.floor(Math.random() * colors.length)];

    const newReview = {
      name,
      role: role || 'Client',
      comment,
      image: image || null,
      ...randomTheme,
      createdAt: new Date()
    };

    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('reviews').insertOne(newReview);

    // Fetch updated reviews list
    const reviews = await db.collection('reviews').find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    console.error('Failed to save review in MongoDB:', error);
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const password = req.headers.get('x-admin-password');

    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== expectedPassword) {
      return NextResponse.json({ error: 'Unauthorized: Invalid password' }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');
    await db.collection('reviews').deleteOne({ _id: new ObjectId(id) });

    const reviews = await db.collection('reviews').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    console.error('Failed to delete review in MongoDB:', error);
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}
