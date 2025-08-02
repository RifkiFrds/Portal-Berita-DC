import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Card from "./Card";

describe("Card Component", () => {
  // 'test' atau 'it' mendefinisikan satu skenario pengujian
  test("should render children correctly", () => {
    // 1. Arrange (Siapkan)
    // Kita render komponen Card dan memberinya children berupa teks
    render(
      <Card>
        Portal Berita JUMT Adalah sebuah asset bagi berita Universitas
        Muhammadiyah Tangerang
      </Card>,
    );

    // 2. Act (Lakukan)
    // Tidak ada aksi pengguna di sini, kita hanya mau cek tampilannya.

    // 3. Assert (Pastikan)
    // Kita cari elemen yang berisi teks 'Teknologi' di layar.
    const badgeElement = screen.getByText(
      /Portal Berita JUMT Adalah sebuah asset bagi berita Universitas Muhammadiyah Tangerang/i,
    );

    // Kita pastikan (expect) elemen tersebut ada di dalam dokumen (ada di layar).
    expect(badgeElement).toBeInTheDocument();
  });
});
