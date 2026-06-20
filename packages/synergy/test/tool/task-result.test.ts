import { describe, expect, test } from "bun:test"
import { formatTaskResult } from "../../src/tool/task"

describe("task result formatting", () => {
  test("surfaces successful child task result with ids and final message", () => {
    const output = formatTaskResult({
      id: "ctx_child",
      sessionID: "ses_child",
      status: "completed",
      result: "NATIVE_CODEX_OK",
    })

    expect(output).toContain("<task_result>")
    expect(output).toContain("task_id: ctx_child")
    expect(output).toContain("session_id: ses_child")
    expect(output).toContain("status: success")
    expect(output).toContain("final_message:\nNATIVE_CODEX_OK")
    expect(output).not.toContain("No output captured")
  })
})
