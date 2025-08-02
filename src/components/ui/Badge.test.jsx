import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Badge from "./Badge";

// 'describe' mengelompokkan tes-tes terkait untuk satu komponen
describe("Badge Component", () => {
  // 'test' atau 'it' mendefinisikan satu skenario pengujian
  test("should render children correctly", () => {
    // 1. Arrange (Siapkan)
    // Kita render komponen Badge dan memberinya children berupa teks
    render(<Badge>Teknologi</Badge>);

    // 2. Act (Lakukan)
    // Tidak ada aksi pengguna di sini, kita hanya mau cek tampilannya.

    // 3. Assert (Pastikan)
    // Kita cari elemen yang berisi teks 'Teknologi' di layar.
    const badgeElement = screen.getByText(/Teknologi/i);

    // Kita pastikan (expect) elemen tersebut ada di dalam dokumen (ada di layar).
    expect(badgeElement).toBeInTheDocument();
  });
});
