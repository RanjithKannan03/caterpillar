'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function update(path) {
    revalidatePath('/result');
    redirect('/result');
}