'use client'
import { useQuery } from 'convex/react'
import React from 'react'
import Link from 'next/link'
import { api } from '@/convex/_generated/api'

type Props = {}

function Notes({ }: Props) {
    const notes = useQuery(api.note.AllNotes, {})
    console.log(notes)
    return (
        <div>
            {notes && notes.map((note, index) => (
                <Link key={index} href={`/chat/${note._id}`} className='p-2 hover:bg-neutral-100 rounded-lg w-full block'>{note.title}</Link>
            ))}
        </div>
    )
}

export default Notes