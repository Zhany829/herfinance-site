import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      interestedInBrand,
      brandGoal,
      incomeGoal,
      timeline,
      firstName,
      lastName,
      phone,
    } = body

    // 验证必填字段
    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 保存到数据库
    // const supabase = await createClient()

    // const { data: application, error: dbError } = await supabase
    //   .from("applications")
    //   .insert({
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: "", // Calendly 会收集邮箱
    //     phone,
    //     interested_in_brand: interestedInBrand,
    //     income_goal: incomeGoal,
    //     status: "submitted",
    //   })
    //   .select()
    //   .single()

    // if (dbError) {
    //   console.error("Database error:", dbError)
    //   return NextResponse.json(
    //     { error: "Failed to save application" },
    //     { status: 500 }
    //   )
    // }

    return NextResponse.json({
      success: true,
      applicationId: 829,
      message: "Application submitted successfully",
    })
  } catch (error) {
    console.error("Application API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
