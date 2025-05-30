import { getGenerativeModel } from "firebase/ai";
import { NextResponse } from 'next/server';
import { ai } from "@/lib/firebase";

// Create a GenerativeModel instance
const model = getGenerativeModel(ai, { model: "gemini-2.0-flash" });

export async function POST(request: Request) {
    try {
        const { brideName, groomName, weddingDate, location, theme } = await request.json();

        // Create the prompt for Gemini
        const prompt = `Generate 50 creative and modern wedding hashtags based on the following details:
    Bride's Name: ${brideName}
    Groom's Name: ${groomName}
    Wedding Date: ${weddingDate || 'Not specified'}
    Location: ${location || 'Not specified'}
    Theme/Vibe: ${theme || 'Not specified'}
    
    Please generate hashtags that are:
    1. Unique and memorable
    2. Easy to read and type
    3. Modern and trendy
    4. Include both names creatively
    5. Mix of short and medium length
    6. Include variations with:
       - Names combined in different ways
       - Wedding date or year
       - Location references
       - Theme elements
       - Love and celebration words
       - Cultural elements if applicable
    
    Return ONLY a JSON array of strings, with no additional text or explanation. Example format:
    ["#JohnAndJane2024", "#JandJWedding"]`;

        // Generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean up the response text to ensure it's valid JSON
        const cleanedText = text.trim().replace(/^```json\n?|\n?```$/g, '');
        
        try {
            const hashtags = JSON.parse(cleanedText);
            
            // Validate that we got an array of strings
            if (!Array.isArray(hashtags) || !hashtags.every(tag => typeof tag === 'string')) {
                throw new Error('Invalid response format');
            }

            return NextResponse.json({ hashtags });
        } catch (parseError) {
            console.error('Error parsing AI response:', parseError);
            console.error('Raw response:', text);
            return NextResponse.json(
                { error: 'Failed to parse AI response' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error generating hashtags:', error);
        return NextResponse.json(
            { error: 'Failed to generate hashtags. Please try again.' },
            { status: 500 }
        );
    }
} 