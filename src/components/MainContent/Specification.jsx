import React from "react";

function Specification({ onClose }) {
  return (
    <div className="fixed inset-0 bg-slate-400 bg-opacity-75 z-50 flex justify-center items-center" onClick={onClose}>
      <div className="specification-container bg-white w-3/4 h-3/4 overflow-y-scroll flex flex-col shadow-lg rounded-lg">
        <div className="header flex justify-between items-center p-4 border-b">
          <p className="text-xl font-bold">Thông tin chi tiết</p>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        <div className="content p-4">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Hãng sản xuất</td>
                <td className="border px-4 py-2">Acer</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Chủng loại</td>
                <td className="border px-4 py-2">Aspire 7 A715-76G-59MW – model giải trí, gaming</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Part Number</td>
                <td className="border px-4 py-2">NH.QMYSV.001</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Mầu sắc, chất liệu</td>
                <td className="border px-4 py-2">Đen (Charcoal Black); vỏ nhôm mặt A</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Bộ vi xử lý</td>
                <td className="border px-4 py-2">Intel® Core™ i5-12450H (3.3GHz upto 4.4Ghz/12MB cache)</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Chipset</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Bộ nhớ trong</td>
                <td className="border px-4 py-2">8GB DDR4 3200Mhz</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Số khe cắm</td>
                <td className="border px-4 py-2">2</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Dung lượng tối đa</td>
                <td className="border px-4 py-2">32GB</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">VGA</td>
                <td className="border px-4 py-2">NVIDIA® GeForce RTX™ 2050 4GB GDDR6</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Ổ cứng</td>
                <td className="border px-4 py-2">512GB SSD PCIe NVMe (nâng cấp tối đa 1 TB SSD PCIe Gen4, 16 Gb/s, NVMe)</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Ổ quang</td>
                <td className="border px-4 py-2">None</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Card Reader</td>
                <td className="border px-4 py-2">None</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Bảo mật, công nghệ</td>
                <td className="border px-4 py-2">Đèn bàn phím; Bảo mật vân tay; 2 quạt Tản nhiệt</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Màn hình</td>
                <td className="border px-4 py-2">15.6 inch FHD IPS (1920 x 1080) Slim Benzel; ComfyView IPS LED</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Webcam</td>
                <td className="border px-4 py-2">HD</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Audio</td>
                <td className="border px-4 py-2"></td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Giao tiếp mạng</td>
                <td className="border px-4 py-2">Gigabit</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Giao tiếp không dây</td>
                <td className="border px-4 py-2">Intel® Wireless Wi-Fi 6E AX211, 2x2 MU-MIMO, Support Bluetooth® 5.1</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Cổng giao tiếp</td>
                <td className="border px-4 py-2">
                  1xUSB Type-C™ port: USB 3.2 Gen 2 (up to 10 Gbps)<br/>
                  • DisplayPort over USB-C<br/>
                  • Thunderbolt™ 4<br/>
                  • USB charging 5 V; 3 A<br/>
                  • DC-in port 20 V; 65 W<br/>
                  3xUSB Standard-A ports, supporting:<br/>
                  • One port for USB 3.2 Gen 1 featuring power off USB charging<br/>
                  • Two ports for USB 3.2 Gen 1<br/>
                  1xHDMI® 2.0 port with HDCP support<br/>
                  1xDC-in jack for AC adapter<br/>
                  1xEthernet (RJ-45) port<br/>
                  1x3.5 mm headphone/speaker jack, supporting headsets with built-in microphone
                </td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Pin</td>
                <td className="border px-4 py-2">50Wh Li-ion battery</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Kích thước (rộng x dài x cao)</td>
                <td className="border px-4 py-2">362.3 (W) x 237.4 (D) x 19.9 (H) mm</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Cân nặng</td>
                <td className="border px-4 py-2">2.1kg</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Hệ điều hành</td>
                <td className="border px-4 py-2">Win 11 Home</td>
              </tr>
              <tr className="odd:bg-bgTable">
                <td className="border px-4 py-2 font-bold">Phụ kiện đi kèm</td>
                <td className="border px-4 py-2">Cable + Sạc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Specification;
